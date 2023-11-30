import { API, graphqlOperation } from "aws-amplify";

export const chatroomExists = async (userA, userB) => {
  //   console.warn(userA, userB);
  const commonchatroom1 = /* GraphQL */ `
    query MyQuery($userA: String, $userB: String) {
      listChatrooms(filter: { userA: { eq: $userA }, userB: { eq: $userB } }) {
        items {
          id
          Messages {
            items {
              chatroomID
              id
              text
              userID
            }
          }
        }
      }
    }
  `;
  const commonchatroom2 = /* GraphQL */ `
    query MyQuery($userA: String, $userB: String) {
      listChatrooms(filter: { userA: { eq: $userB }, userB: { eq: $userA } }) {
        items {
          id
          Messages {
            items {
              chatroomID
              id
              text
              userID
            }
          }
        }
      }
    }
  `;
  const response1 = await API.graphql(
    graphqlOperation(commonchatroom1, { userA: userA, userB: userB })
  );
  const response2 = await API.graphql(
    graphqlOperation(commonchatroom2, { userA: userA, userB: userB })
  );
  if (response1 && response2) {
    if (
      response1.data?.listChatrooms?.items.length ||
      response2.data?.listChatrooms?.items.length
    ) {
      const chatroomid =
        response1.data?.listChatrooms?.items[0]?.id ||
        response2.data?.listChatrooms?.items[0]?.id;
      return { status: true, chatroom: chatroomid };
    } else {
      return { status: false };
    }
  }
};
