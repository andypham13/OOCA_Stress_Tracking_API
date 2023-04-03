import { spawn } from 'child_process';
export const AttachmentProcessing = async (req: any, res: any, next: any) => {
    try{
        if (req.files) {
            const file = req.files[Object.keys(req.files)[0]];  // Get only the first file
            const fileName = file.name;
            const timestamp = Date.now();
            const newFilePath = `${process.env.PUBLIC_PATH}/${timestamp}-${fileName}`;
            const newFileName = `${timestamp}-${fileName}`;
            await resizeImage(file.tempFilePath, newFilePath);
            req.body.attachment = newFileName;
        }
        next();
    } catch (e: any) {
        next();
    }
}

// Naive implementation of image resizing using child_process to spawn a new process then run the ImageMagick convert command
// to resize the image to 800x* 
async function resizeImage(imagePath: string, newFileName: string) {
    return new Promise((resolve, reject) => {
        const child = spawn('convert', [imagePath, '-resize', '800x', newFileName]);
        child.on('exit', (code: any) => {
            if (code === 0) {
                spawn('unlink', [imagePath]);
                resolve(1);
            } else {
                reject(0);
            }
        });
    });
}