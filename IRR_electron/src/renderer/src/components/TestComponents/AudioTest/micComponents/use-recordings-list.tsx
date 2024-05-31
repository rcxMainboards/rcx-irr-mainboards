//@ts-nocheck
import { useState, useEffect } from "react";
import { deleteAudio } from "./handlers/recordings-lists";
import { v4 as uuid } from "uuid";

export default function useRecordingsList(audio) {
    const [recordings, setRecordings] = useState([]);

    useEffect(() => {
        if (audio)
            setRecordings((prevState) => {
                return [...prevState, { key: generateKey(), audio }];
            });
    }, [audio]);

    function generateKey() {
        return uuid();
    }

    return {
        recordings,
        deleteAudio: (audioKey) => deleteAudio(audioKey, setRecordings),
    };
}