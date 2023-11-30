/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
      id
      text
      userID
      reviewer
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        userID
        reviewer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reviewsByUserID = /* GraphQL */ `
  query ReviewsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reviewsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        userID
        reviewer
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      text
      chatroomID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByChatroomID = /* GraphQL */ `
  query MessagesByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const messagesByUserID = /* GraphQL */ `
  query MessagesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatroom = /* GraphQL */ `
  query GetChatroom($id: ID!) {
    getChatroom(id: $id) {
      id
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      users {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      lastmessage {
        id
        text
        chatroomID
        userID
        createdAt
        updatedAt
        __typename
      }
      userA
      userB
      createdAt
      updatedAt
      chatroomLastmessageId
      __typename
    }
  }
`;
export const listChatrooms = /* GraphQL */ `
  query ListChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        lastmessage {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
          __typename
        }
        userA
        userB
        createdAt
        updatedAt
        chatroomLastmessageId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccounts = /* GraphQL */ `
  query GetAccounts($id: ID!) {
    getAccounts(id: $id) {
      id
      accountnumber
      accountname
      bank
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountnumber
        accountname
        bank
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const accountsByUserID = /* GraphQL */ `
  query AccountsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        accountnumber
        accountname
        bank
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      description
      amount
      date
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        amount
        date
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const transactionsByUserID = /* GraphQL */ `
  query TransactionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        amount
        date
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      amount
      paymentstatus
      customer {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      product {
        id
        name
        price
        deliverytimeline
        quantity
        details
        image
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      orderCustomerId
      orderProductId
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        paymentstatus
        customer {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        product {
          id
          name
          price
          deliverytimeline
          quantity
          details
          image
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        orderCustomerId
        orderProductId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProducts = /* GraphQL */ `
  query GetProducts($id: ID!) {
    getProducts(id: $id) {
      id
      name
      price
      deliverytimeline
      quantity
      details
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        deliverytimeline
        quantity
        details
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMechanicjobrequests = /* GraphQL */ `
  query GetMechanicjobrequests($id: ID!) {
    getMechanicjobrequests(id: $id) {
      id
      price
      status
      paymentrequestsent
      vehicle {
        id
        name
        model
        year
        regno
        vin
        image
        user {
          id
          date
          vendorname
          amountpaid
          paymentmethod
          repairstatus
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        uservehicleUserId
        __typename
      }
      mechanicid {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      vehicleownerid {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      mechanicjobrequestsVehicleId
      mechanicjobrequestsMechanicidId
      mechanicjobrequestsVehicleowneridId
      __typename
    }
  }
`;
export const listMechanicjobrequests = /* GraphQL */ `
  query ListMechanicjobrequests(
    $filter: ModelMechanicjobrequestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMechanicjobrequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        price
        status
        paymentrequestsent
        vehicle {
          id
          name
          model
          year
          regno
          vin
          image
          createdAt
          updatedAt
          uservehicleUserId
          __typename
        }
        mechanicid {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        vehicleownerid {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        mechanicjobrequestsVehicleId
        mechanicjobrequestsMechanicidId
        mechanicjobrequestsVehicleowneridId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMechanicjobs = /* GraphQL */ `
  query GetMechanicjobs($id: ID!) {
    getMechanicjobs(id: $id) {
      id
      status
      price
      paymentrequestsent
      vehicle {
        id
        name
        model
        year
        regno
        vin
        image
        user {
          id
          date
          vendorname
          amountpaid
          paymentmethod
          repairstatus
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        uservehicleUserId
        __typename
      }
      mechanicid {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      vehicleownerid {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      mechanicjobsVehicleId
      mechanicjobsMechanicidId
      mechanicjobsVehicleowneridId
      __typename
    }
  }
`;
export const listMechanicjobs = /* GraphQL */ `
  query ListMechanicjobs(
    $filter: ModelMechanicjobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMechanicjobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        price
        paymentrequestsent
        vehicle {
          id
          name
          model
          year
          regno
          vin
          image
          createdAt
          updatedAt
          uservehicleUserId
          __typename
        }
        mechanicid {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        vehicleownerid {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        mechanicjobsVehicleId
        mechanicjobsMechanicidId
        mechanicjobsVehicleowneridId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserrepairhistory = /* GraphQL */ `
  query GetUserrepairhistory($id: ID!) {
    getUserrepairhistory(id: $id) {
      id
      date
      vendorname
      amountpaid
      paymentmethod
      repairstatus
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserrepairhistories = /* GraphQL */ `
  query ListUserrepairhistories(
    $filter: ModelUserrepairhistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserrepairhistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        date
        vendorname
        amountpaid
        paymentmethod
        repairstatus
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUservehicle = /* GraphQL */ `
  query GetUservehicle($id: ID!) {
    getUservehicle(id: $id) {
      id
      name
      model
      year
      regno
      vin
      image
      user {
        id
        date
        vendorname
        amountpaid
        paymentmethod
        repairstatus
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      uservehicleUserId
      __typename
    }
  }
`;
export const listUservehicles = /* GraphQL */ `
  query ListUservehicles(
    $filter: ModelUservehicleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUservehicles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        model
        year
        regno
        vin
        image
        user {
          id
          date
          vendorname
          amountpaid
          paymentmethod
          repairstatus
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        uservehicleUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserpurchases = /* GraphQL */ `
  query GetUserpurchases($id: ID!) {
    getUserpurchases(id: $id) {
      id
      itemname
      itemid
      vendorname
      vendorid
      price
      deliverystatus
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserpurchases = /* GraphQL */ `
  query ListUserpurchases(
    $filter: ModelUserpurchasesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserpurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemname
        itemid
        vendorname
        vendorid
        price
        deliverystatus
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userpurchasesByUserID = /* GraphQL */ `
  query UserpurchasesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserpurchasesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userpurchasesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemname
        itemid
        vendorname
        vendorid
        price
        deliverystatus
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fullname
      email
      phone
      profileimg
      homaddress
      fromgoogle
      pushnotify
      emailnotify
      usebiometric
      pushtoken
      rating
      purchases {
        items {
          id
          itemname
          itemid
          vendorname
          vendorid
          price
          deliverystatus
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      businessname
      vendorapproved
      usertype
      vendortype
      Transactions {
        items {
          id
          description
          amount
          date
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Accounts {
        items {
          id
          accountnumber
          accountname
          bank
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Chatrooms {
        items {
          id
          chatroomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      specialization
      carsfixed
      availability
      verfied
      experience
      Reviews {
        items {
          id
          text
          userID
          reviewer
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserChatroom = /* GraphQL */ `
  query GetUserChatroom($id: ID!) {
    getUserChatroom(id: $id) {
      id
      chatroomId
      userId
      chatroom {
        id
        Messages {
          nextToken
          __typename
        }
        users {
          nextToken
          __typename
        }
        lastmessage {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
          __typename
        }
        userA
        userB
        createdAt
        updatedAt
        chatroomLastmessageId
        __typename
      }
      user {
        id
        fullname
        email
        phone
        profileimg
        homaddress
        fromgoogle
        pushnotify
        emailnotify
        usebiometric
        pushtoken
        rating
        purchases {
          nextToken
          __typename
        }
        businessname
        vendorapproved
        usertype
        vendortype
        Transactions {
          nextToken
          __typename
        }
        Accounts {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        Chatrooms {
          nextToken
          __typename
        }
        specialization
        carsfixed
        availability
        verfied
        experience
        Reviews {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserChatrooms = /* GraphQL */ `
  query ListUserChatrooms(
    $filter: ModelUserChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatroomId
        userId
        chatroom {
          id
          userA
          userB
          createdAt
          updatedAt
          chatroomLastmessageId
          __typename
        }
        user {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatroomsByChatroomId = /* GraphQL */ `
  query UserChatroomsByChatroomId(
    $chatroomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatroomsByChatroomId(
      chatroomId: $chatroomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatroomId
        userId
        chatroom {
          id
          userA
          userB
          createdAt
          updatedAt
          chatroomLastmessageId
          __typename
        }
        user {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatroomsByUserId = /* GraphQL */ `
  query UserChatroomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatroomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatroomId
        userId
        chatroom {
          id
          userA
          userB
          createdAt
          updatedAt
          chatroomLastmessageId
          __typename
        }
        user {
          id
          fullname
          email
          phone
          profileimg
          homaddress
          fromgoogle
          pushnotify
          emailnotify
          usebiometric
          pushtoken
          rating
          businessname
          vendorapproved
          usertype
          vendortype
          specialization
          carsfixed
          availability
          verfied
          experience
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
