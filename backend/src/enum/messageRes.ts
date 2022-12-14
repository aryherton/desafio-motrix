enum Messages {
  INCORRECT = 'Incorrect email or password',
  INVALID = 'All fields must be filled',
  UPDATE_SUCCESS = 'Match updated successfully',
  SUCCESS_RECORD = 'Message registered successfully',
  LOGIN_SUCCESS = 'Login realized success',
  ERROR_SERVER = 'Internal server error',
  BODY_IS_REQUIRED = 'Body is required in the request',
  ALREADY_REGISTERED = 'User already registered',
  NOT_TOKEN = 'Token is requested',
  DELETE_SUCCESS = 'Message successfully deleted',
}

export default Messages;