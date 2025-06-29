import multer from "multer";

//  setup multer middleware

const upload = multer({ storage: multer.diskStorage({}) });

export default upload;
