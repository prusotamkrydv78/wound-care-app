'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { MdCameraAlt, MdUpload, MdCheck, MdWarning, MdInfo, MdArrowBack } from 'react-icons/md';
import { RiCameraLine, RiImageLine, RiRulerLine } from 'react-icons/ri';

export default function WoundPhotoUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadStep, setUploadStep] = useState('checklist'); // checklist, capture, review, upload
  const [qualityChecks, setQualityChecks] = useState({
    lighting: false,
    focus: false,
    positioning: false,
    reference: false
  });
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isUsingCamera, setIsUsingCamera] = useState(false);

  const preUploadChecklist = [
    {
      id: 'lighting',
      title: 'Good Lighting',
      description: 'Ensure bright, even lighting without shadows',
      icon: MdInfo,
      color: 'text-[#5698FF]'
    },
    {
      id: 'positioning',
      title: 'Proper Positioning',
      description: 'Position wound clearly visible and centered',
      icon: MdInfo,
      color: 'text-[#8B6DFF]'
    },
    {
      id: 'reference',
      title: 'Reference Object',
      description: 'Include a coin or ruler for size reference',
      icon: RiRulerLine,
      color: 'text-[#56E0A0]'
    },
    {
      id: 'focus',
      title: 'Clear Focus',
      description: 'Ensure the wound is in sharp focus',
      icon: MdCheck,
      color: 'text-[#6B7AFF]'
    }
  ];

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        setUploadStep('review');
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsUsingCamera(true);
        setUploadStep('capture');
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Unable to access camera. Please use file upload instead.');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      
      canvas.toBlob((blob) => {
        setSelectedImage(blob);
        setImagePreview(canvas.toDataURL());
        setUploadStep('review');
        
        // Stop camera stream
        const stream = video.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        setIsUsingCamera(false);
      });
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;
    
    setUploadStep('upload');
    
    // Simulate upload process
    setTimeout(() => {
      alert('Photo uploaded successfully!');
      // Reset form
      setSelectedImage(null);
      setImagePreview(null);
      setUploadStep('checklist');
      setQualityChecks({
        lighting: false,
        focus: false,
        positioning: false,
        reference: false
      });
    }, 2000);
  };

  const toggleCheck = (checkId) => {
    setQualityChecks(prev => ({
      ...prev,
      [checkId]: !prev[checkId]
    }));
  };

  const allChecksComplete = Object.values(qualityChecks).every(check => check);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/patient/wound-tracker" className="p-2 rounded-lg hover:bg-[#F8F9FF]">
          <MdArrowBack className="w-5 h-5 text-[#8F96AA]" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#1C243C]">Upload Wound Photo</h1>
          <p className="text-[#8F96AA] mt-1">Document your healing progress</p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-xl border border-[#DDE1EC] p-6">
        <div className="flex items-center justify-between mb-6">
          {['checklist', 'capture', 'review', 'upload'].map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                uploadStep === step ? 'bg-[#6B7AFF] text-white' :
                ['checklist', 'capture', 'review'].indexOf(uploadStep) > index ? 'bg-[#56E0A0] text-white' :
                'bg-[#DDE1EC] text-[#8F96AA]'
              }`}>
                {['checklist', 'capture', 'review'].indexOf(uploadStep) > index ? <MdCheck className="w-4 h-4" /> : index + 1}
              </div>
              {index < 3 && (
                <div className={`w-16 h-0.5 mx-2 ${
                  ['checklist', 'capture', 'review'].indexOf(uploadStep) > index ? 'bg-[#56E0A0]' : 'bg-[#DDE1EC]'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        {uploadStep === 'checklist' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#1C243C] mb-4">Pre-Upload Checklist</h2>
              <p className="text-[#8F96AA] mb-6">Please ensure the following before taking your photo:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {preUploadChecklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    qualityChecks[item.id] 
                      ? 'border-[#56E0A0] bg-[#56E0A0]/5' 
                      : 'border-[#DDE1EC] hover:border-[#6B7AFF]/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-${item.color.split('-')[1]}/10 flex items-center justify-center`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-[#1C243C]">{item.title}</h3>
                        {qualityChecks[item.id] && (
                          <MdCheck className="w-4 h-4 text-[#56E0A0]" />
                        )}
                      </div>
                      <p className="text-sm text-[#8F96AA] mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={startCamera}
                disabled={!allChecksComplete}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
                  allChecksComplete
                    ? 'bg-[#6B7AFF] text-white hover:bg-[#506EFF]'
                    : 'bg-[#DDE1EC] text-[#8F96AA] cursor-not-allowed'
                }`}
              >
                <MdCameraAlt className="w-5 h-5" />
                Use Camera
              </button>
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={!allChecksComplete}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
                  allChecksComplete
                    ? 'bg-[#8B6DFF] text-white hover:bg-[#7A5BFF]'
                    : 'bg-[#DDE1EC] text-[#8F96AA] cursor-not-allowed'
                }`}
              >
                <MdUpload className="w-5 h-5" />
                Upload File
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>
        )}

        {uploadStep === 'capture' && isUsingCamera && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#1C243C]">Capture Photo</h2>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 border-2 border-dashed border-white/50 m-8 rounded-lg"></div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={capturePhoto}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#6B7AFF] rounded-full"></div>
                </button>
              </div>
            </div>
            <canvas ref={canvasRef} className="hidden" />
          </div>
        )}

        {uploadStep === 'review' && imagePreview && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#1C243C]">Review Photo</h2>
            <div className="relative">
              <img
                src={imagePreview}
                alt="Wound photo preview"
                className="w-full max-h-96 object-contain rounded-lg border border-[#DDE1EC]"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                <div className="flex items-center gap-2 text-sm">
                  <MdCheck className="w-4 h-4 text-[#56E0A0]" />
                  <span className="text-[#1C243C]">Quality: Good</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setUploadStep('checklist');
                  setSelectedImage(null);
                  setImagePreview(null);
                }}
                className="flex-1 py-3 px-4 border border-[#DDE1EC] text-[#8F96AA] rounded-lg hover:bg-[#F8F9FF] transition-colors"
              >
                Retake Photo
              </button>
              <button
                onClick={handleUpload}
                className="flex-1 py-3 px-4 bg-[#6B7AFF] text-white rounded-lg hover:bg-[#506EFF] transition-colors"
              >
                Upload Photo
              </button>
            </div>
          </div>
        )}

        {uploadStep === 'upload' && (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#6B7AFF]/10 rounded-full flex items-center justify-center mx-auto">
              <MdUpload className="w-8 h-8 text-[#6B7AFF] animate-pulse" />
            </div>
            <h2 className="text-lg font-semibold text-[#1C243C]">Uploading Photo...</h2>
            <p className="text-[#8F96AA]">Please wait while we process your image</p>
            <div className="w-full bg-[#DDE1EC] rounded-full h-2">
              <div className="bg-[#6B7AFF] h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
