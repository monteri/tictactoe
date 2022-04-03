import consumer from './consumer';

const connectToGameChannel = ({
  gameId,
  connected,
  disconnected,
  received,
}) => {
  consumer.subscriptions.create({
    channel: 'GameChannel',
    game_id: gameId,
  }, {
    connected,
    disconnected,
    received,
  });
};

export default connectToGameChannel;
