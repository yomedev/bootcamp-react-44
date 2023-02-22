import { useEffect } from "react";

const ESC_KEY_VALUE = "Escape";

export const Modal = ({ onModalClose, children }) => {
  useEffect(() => {
    const handleCloseOnEscKey = (event) => {
      if (event.key === ESC_KEY_VALUE) {
        console.log(event);
        onModalClose();
      }
    };
    window.addEventListener("keydown", handleCloseOnEscKey);
    return () => {
      window.removeEventListener("keydown", handleCloseOnEscKey);
    };
  }, [onModalClose]); // {} !== {}

  const handleCloseOnBackdrop = (event) => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return (
    <>
      <div className="modal-backdrop fade show" />

      <div
        className="modal fade show"
        style={{ display: "block" }}
        onClick={handleCloseOnBackdrop}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onModalClose}
              />
            </div>

            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleCloseOnEscKey);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleCloseOnEscKey);
//   }

//   handleCloseOnEscKey = (event) => {
//     if (event.key === ESC_KEY_VALUE) {
//       console.log(event);
//       this.props.onModalClose();
//     }
//   };

//   handleCloseOnBackdrop = (event) => {
//     if (event.currentTarget === event.target) {
//       this.props.onModalClose();
//     }
//   };

//   render() {
//     const { onModalClose, children } = this.props;
//     return (
//       <>
//         <div className="modal-backdrop fade show" />

//         <div
//           className="modal fade show"
//           style={{ display: "block" }}
//           onClick={this.handleCloseOnBackdrop}
//         >
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Modal title</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   aria-label="Close"
//                   onClick={onModalClose}
//                 />
//               </div>

//               <div className="modal-body">{children}</div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export const Modal = ({ children, onModalClose }) => {
//   const handleCloseOnBackdrop = (event) => {
//     if (event.currentTarget === event.target) {
//       onModalClose();
//     }
//   };

//   return (
//     <>
//       <div className="modal-backdrop fade show" />

//       <div
//         className="modal fade show"
//         style={{ display: "block" }}
//         onClick={handleCloseOnBackdrop}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 aria-label="Close"
//                 onClick={onModalClose}
//               />
//             </div>

//             <div className="modal-body">{children}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// Modal.propType = {
//   children: PropTypes.node.isRequired
// };
