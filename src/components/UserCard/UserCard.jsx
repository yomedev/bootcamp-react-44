import { useSelector } from 'react-redux';
import defaultAvatar from './default-avatar.jpg'

export const UserCard = () => {
  const userInfo = useSelector(state => state.profile.data)
  if (!userInfo) {
    return <p>Error</p>
  }
  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <img
          alt=""
          width="80px"
          height="80px"
          className="d-block"
          src={userInfo?.avatar || defaultAvatar}
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            {userInfo?.first_name} {userInfo?.last_name}
          </strong>
          <small className="text-muted">{userInfo?.email}</small>
        </div>
      </div>
    </div>
  );
};