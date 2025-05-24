import React from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  // 這裡使用測試用的 DASH 影片網址
  const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">DRM 影片播放 Demo</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <VideoPlayer 
            manifestUri={manifestUri}
            // 實際使用時需要替換成真實的 license server URL
            // licenseServer="https://your-license-server.com/license"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
