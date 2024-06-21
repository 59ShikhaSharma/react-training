
const MyModal = ({ closeModal }: any) => {
  return (
    <>
      <div className='modal-wrapper'>
      <div className='modal-container'>
        <h1> Welcome </h1>
        <p> The modal moves the focus back to the body of the component if the focus tries to escape it.
          This is done for accessibility purposes. However, it might create issues. </p>
        <button onClick={closeModal}>Accept it </button>
      </div>
      </div>
    </>
  )
}

export default MyModal;
