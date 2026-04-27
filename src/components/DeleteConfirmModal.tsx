const DeleteConfirmModal = () => {
  return (
    <>
      
      <dialog id="deleteModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            kayit silinecektir
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default DeleteConfirmModal;
