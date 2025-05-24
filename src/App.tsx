import React, { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [selectedContent, setSelectedContent] = useState<'clear' | 'clearkey' | 'widevine'>('clear');

  // 測試用的影片配置
  const contents = {
    clear: {
      name: '未加密內容',
      manifestUri: 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
    },
    clearkey: {
      name: 'Clear Key 加密內容',
      manifestUri: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-clearkey/dash.mpd',
      clearKey: {
        keyId: '8b5abc593d1b21d7f9ab88506b648656',
        key: '3d5e6d6b756b686c666d58776b5a6c54'
      }
    },
    widevine: {
      name: 'Widevine DRM 內容',
      manifestUri: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
      licenseServer: 'https://proxy.uat.widevine.com/proxy?provider=widevine_test'
    }
  };

  const currentContent = contents[selectedContent];
  
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">DRM 影片播放 Demo</h1>
        
        <div className="mb-6 flex gap-4">
          {Object.entries(contents).map(([key, content]) => (
            <button
              key={key}
              onClick={() => setSelectedContent(key as 'clear' | 'clearkey' | 'widevine')}
              className={`px-4 py-2 rounded ${
                selectedContent === key 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {content.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <VideoPlayer 
            {...currentContent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
