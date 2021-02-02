import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../services/api';

import { MdNotifications } from 'react-icons/md';
import {
  Container,
  Content,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications({
  setVisibleDrop,
  visibleNotify,
  setVisibleNotify,
}) {
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');
      const data = response.data.map((notification) => ({
        ...notification,
        dateFormatted: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleAsVisibleNotify() {
    setVisibleNotify(!visibleNotify);

    setVisibleDrop(false);
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  }

  return (
    <Container>
      <Content>
        <Badge onClick={handleAsVisibleNotify} hasUnread={hasUnread}>
          <MdNotifications size={25} color={'#fff'} />
        </Badge>
        <NotificationList visibleNotify={visibleNotify}>
          <Scroll>
            {notifications &&
              notifications.map((notification) => (
                <Notification
                  key={notification._id}
                  unread={!notification.read}
                >
                  <p>{notification.content}</p>
                  <time>{notification.dateFormatted}</time>
                  {!notification.read && (
                    <button
                      type="button"
                      onClick={() => handleMarkAsRead(notification._id)}
                    >
                      Marcar como lida
                    </button>
                  )}
                </Notification>
              ))}
          </Scroll>
        </NotificationList>
      </Content>
    </Container>
  );
}
