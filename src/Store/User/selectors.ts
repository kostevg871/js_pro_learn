import { RootStateType } from 'Store/configureStore';

export const getUserEmail = (state: RootStateType) => state.userSlice.email;