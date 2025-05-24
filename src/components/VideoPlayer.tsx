import React, { useEffect, useRef } from 'react';
import * as shaka from 'shaka-player';

interface VideoPlayerProps {
  manifestUri: string;
  licenseServer?: string;
  clearKey?: {
    keyId: string;
    key: string;
  };
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ manifestUri, licenseServer, clearKey }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<shaka.Player | null>(null);

  useEffect(() => {
    const initPlayer = async () => {
      // 檢查瀏覽器支援
      if (!shaka.Player.isBrowserSupported()) {
        console.error('瀏覽器不支援 Shaka Player');
        return;
      }

      try {
        // 初始化播放器
        const video = videoRef.current!;
        const player = new shaka.Player(video);
        playerRef.current = player;

        // 設置 DRM 配置
        if (licenseServer) {
          // Widevine DRM
          player.configure({
            drm: {
              servers: {
                'com.widevine.alpha': licenseServer
              }
            }
          });
        } else if (clearKey) {
          // Clear Key 加密
          player.configure({
            drm: {
              clearKeys: {
                [clearKey.keyId]: clearKey.key
              }
            }
          });
        }

        // 載入影片
        await player.load(manifestUri);
        console.log('影片載入成功');
      } catch (error) {
        console.error('播放器初始化錯誤:', error);
      }
    };

    initPlayer();

    // 清理函數
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [manifestUri, licenseServer, clearKey]);

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        controls
        className="w-full max-w-4xl"
      />
      <div className="mt-4 text-sm text-gray-600">
        {clearKey ? '使用 Clear Key 加密播放' : licenseServer ? '使用 DRM 保護播放' : '未加密內容'}
      </div>
    </div>
  );
};

export default VideoPlayer; 