import React, { useEffect, useRef } from 'react';
import * as shaka from 'shaka-player';

interface VideoPlayerProps {
  manifestUri: string;
  licenseServer?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ manifestUri, licenseServer }) => {
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

        // 如果有提供 license server，設置 DRM
        if (licenseServer) {
          player.configure({
            drm: {
              servers: {
                'com.widevine.alpha': licenseServer
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
  }, [manifestUri, licenseServer]);

  return (
    <div className="video-player-container">
      <video
        ref={videoRef}
        controls
        className="w-full max-w-4xl"
      />
    </div>
  );
};

export default VideoPlayer; 