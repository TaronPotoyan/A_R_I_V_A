import type { MessageProps } from '../interface/IProductDescriptor';

export default function Message({ msg, closeMsg }: MessageProps) {
  return (
    <>
      {msg.text && (
        <div className={`Alert Alert--${msg.type}`}>
          <span className="Alert__msg">{msg.text}</span>
          <button className="Alert__close" onClick={closeMsg}>
            &times;
          </button>
        </div>
      )}
    </>
  );
}
