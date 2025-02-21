import { Button } from "react-native";
import {useAuth} from '@/context/AuthContext';
const CustomButtonLogout = () => {
    const {logout} = useAuth();
    const handleLogout = () => {
        console.log('logout');
        logout();
    }
    return (
        <Button title="Sign Out" onPress={handleLogout} />
    );
}

export default CustomButtonLogout;