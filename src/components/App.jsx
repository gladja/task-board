export const App = () => {

  const dragHandle = e => {
    // console.log('x', e.pageX);
    // console.log('y', e.pageY);
    console.log(e);
  }

  return (
    <div
    draggable={true}
    // onDragEnd={dragHandle}
    onDragEnd={(e) => (dragHandle(e))}
    // onDragStart={(e) => (dragHandle(e))}
    >
      <form>
        <input type={'text'} />
        <button>+</button>
        <button>-</button>
      </form>
    </div>
  );
};
