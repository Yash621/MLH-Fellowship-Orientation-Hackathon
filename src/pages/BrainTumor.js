import React from 'react'
import uploadSVG from '../assets/uploadImage.svg'
import PredictionResult from '../components/PredictionResult'
import Preview from '../components/Preview'
import { useFormUpload } from '../components/useFormUpload'
import { useDropzone } from 'react-dropzone'

function BraibTumor() {
    const { file, prediction, description, isLoading, onDrop } =
        useFormUpload()

    const { getRootProps, getInputProps, isDragActive } =
        useDropzone({ onDrop, accept: 'image/jpeg, image/png, image/jpg, image/tif' })

    return (
        <div>
            {file.name ? (
                <div className="flex flex-row space-x-12 justify-center items-center w-full pt-36 pb-48">

                        <div className="">
                            <button className='bg-secondary py-2 px-8 rounded-md text-xl text-white' {...getRootProps()}>
                                Upload another image
                            </button>
                            <input {...getInputProps()} />
                        </div>

                        <div className='text-white '>
                            <Preview file={file} />
                        </div>

                        {isLoading && <div className="animate-spin w-24 h-24 text-blue-600"></div>}

                    <div className=''>
                    {prediction.probability && (
                        <PredictionResult
                            prediction={prediction}
                            description={description}
                        />
                    )}
                    </div>

                </div>
            ) : (
                <div className="grid place-items-center">

                    <h1 className="py-5 text-5xl font-bold text-white">Brain Tumor Prediction</h1>

                    <div className="py-6">
                        <input {...getInputProps()} data-testid="upload-image" />
                        <h2 className='text-white text-center text-3xl py-5'>Choose a file</h2>

                        {isDragActive ? (
                            <div className='w-96 h-96 rounded-lg mb-24 bg-gray-100 grid place-items-center' data-testid="dropzone-container"  {...getRootProps()}>
                                <img src={uploadSVG} className="w-28 h-28 pt-8" alt="Illustration upload" />
                                <h1 className="text-[28px] font-bold text-center">Drop here</h1>
                                <h1 className="text-xl">to send your photo</h1>
                            </div>
                        ) : (
                            <div className='w-96 h-96 rounded-lg mb-24 bg-gray-100 grid place-items-center' data-testid="dropzone-container"  {...getRootProps()}>
                                <img src={uploadSVG} className="w-28 h-28 pt-8" alt="Illustration upload" />
                                <h1 className="text-[28px] font-bold text-center">Drag and Drop or click here</h1>
                                <h1 className="text-xl">to send your photo</h1>
                                <p className='text-lg pb-14'>No file selected.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default BraibTumor
