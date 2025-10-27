// UserProfile.js
const UserProfile = () => {
    // Component logic
};

export default UserProfile;
import UserProfile from './UserProfile';
// UserUtilities.js
export const getName = user => user.name;
export const getEmail = user => user.email;
import { getName, getEmail } from './UserUtilities';
