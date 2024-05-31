//@ts-nocheck
import useRecordingsList from "./use-recordings-list"
import { Button } from '@nextui-org/react'

export default function RecordedList({ audio, openModalNextTest }) {
    const { recordings, deleteAudio } = useRecordingsList(audio);

    return (
        <div>
            {recordings.length > 0 ? (
                <>
                    <h2 className="font-semibold text-center text-xl my-4">Tus grabaciones</h2>
                    <div className="recordings-list">
                        {recordings.map((record) => (
                            <div className="record" key={record.key}>
                                <audio controls src={record.audio} />
                                <div className="delete-button-container">
                                    <button
                                        className="delete-button"
                                        title="Delete this audio"
                                        onClick={() => deleteAudio(record.key)}
                                    >
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button size="lg" className="bg-primary-500 text-white w-full" onClick={openModalNextTest}>Ir a la siguiente Prueba</Button>
                </>
            ) : (
                <div className="no-records">
                    <span className="font-semibold text-xl p-2">No tienes grabaciones actualmente</span>

                </div>
            )}
        </div>
    );
}
