import { useRef } from 'react';

import FlashMessage, { showMessage } from 'react-native-flash-message';

export function Notification({ message, type }) {

    const messageRef = useRef(null)

    showMessage({
        message: message,
        type: type,
        duration: 3000,
        icon: 'auto',
        hideOnPress: true,
        onPress: () => {
          messageRef.current?.hideMessage();
        },
    });

    return (
        <>
            <FlashMessage ref={messageRef} position="top" />
        </>
    );
}