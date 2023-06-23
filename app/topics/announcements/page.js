import styles from './page.module.scss';

export default function Announcements() {
  return (
    <div className="mx-56 flex flex-col justify-center">
      <div>
        <button>+ New Topic</button>
      </div>

      <div>
        <h2 className="font-inter box-border h-10  flex items-center   w-50 p-4 border-1 px-3 py-4 b bg-[#0d202d] text-white">
          Announcements
        </h2>
      </div>
    </div>
  );
}
