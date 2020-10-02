//directory where uploaded save for temperoary
export const tempFileDirecorty = "./uploads/temp/";

//maximum allowed size of an image
export const MAX_UPLOAD_SIZE = 5000000;

//configuration for file upload library
export const fileUploadConfig = {
    limits: {
        fileSize: MAX_UPLOAD_SIZE
    },
    useTempFiles: true,
    tempFileDir: tempFileDirecorty,
    createParentPath: true,
    safeFileName: true,
    preserveExtension: true,
    abortOnLimit: true,
    //debug: production_env,
    // limitHandler: (req: Request, res: Response, next: Function)=>{
    //     invalidRes.data = "FILE TOO LARGE";
    //     return res.status(413).json(invalidRes); 
    // }    
};