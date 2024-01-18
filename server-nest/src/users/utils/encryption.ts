import * as bcrypt from 'bcrypt';

async function encryptionPassword (password:string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash
    
}

async function comparePassword(password:string, hash:string) {
    const isMatch = await bcrypt.compare(password, hash);
    if (isMatch) return true;
    return false
    
}

export { encryptionPassword, comparePassword }