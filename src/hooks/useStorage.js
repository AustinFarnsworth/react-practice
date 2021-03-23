import { useState, useEffect } from "react";
import { projectFirestore, projectStorage } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] =useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] =useState(null);

    useEffect(() => {
        // references
        const storageReference = projectStorage.ref(file.name)

        storageReference.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageReference.getDownloadUrl();
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }

}

export default useStorage; 
