/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReviews = /* GraphQL */ `
  mutation CreateReviews(
    $input: CreateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    createReviews(input: $input, condition: $condition) {
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
export const updateReviews = /* GraphQL */ `
  mutation UpdateReviews(
    $input: UpdateReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    updateReviews(input: $input, condition: $condition) {
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
export const deleteReviews = /* GraphQL */ `
  mutation DeleteReviews(
    $input: DeleteReviewsInput!
    $condition: ModelReviewsConditionInput
  ) {
    deleteReviews(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createChatroom = /* GraphQL */ `
  mutation CreateChatroom(
    $input: CreateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    createChatroom(input: $input, condition: $condition) {
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
export const updateChatroom = /* GraphQL */ `
  mutation UpdateChatroom(
    $input: UpdateChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    updateChatroom(input: $input, condition: $condition) {
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
export const deleteChatroom = /* GraphQL */ `
  mutation DeleteChatroom(
    $input: DeleteChatroomInput!
    $condition: ModelChatroomConditionInput
  ) {
    deleteChatroom(input: $input, condition: $condition) {
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
export const createAccounts = /* GraphQL */ `
  mutation CreateAccounts(
    $input: CreateAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    createAccounts(input: $input, condition: $condition) {
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
export const updateAccounts = /* GraphQL */ `
  mutation UpdateAccounts(
    $input: UpdateAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    updateAccounts(input: $input, condition: $condition) {
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
export const deleteAccounts = /* GraphQL */ `
  mutation DeleteAccounts(
    $input: DeleteAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    deleteAccounts(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
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
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
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
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
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
export const createMechanicjobrequests = /* GraphQL */ `
  mutation CreateMechanicjobrequests(
    $input: CreateMechanicjobrequestsInput!
    $condition: ModelMechanicjobrequestsConditionInput
  ) {
    createMechanicjobrequests(input: $input, condition: $condition) {
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
export const updateMechanicjobrequests = /* GraphQL */ `
  mutation UpdateMechanicjobrequests(
    $input: UpdateMechanicjobrequestsInput!
    $condition: ModelMechanicjobrequestsConditionInput
  ) {
    updateMechanicjobrequests(input: $input, condition: $condition) {
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
export const deleteMechanicjobrequests = /* GraphQL */ `
  mutation DeleteMechanicjobrequests(
    $input: DeleteMechanicjobrequestsInput!
    $condition: ModelMechanicjobrequestsConditionInput
  ) {
    deleteMechanicjobrequests(input: $input, condition: $condition) {
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
export const createMechanicjobs = /* GraphQL */ `
  mutation CreateMechanicjobs(
    $input: CreateMechanicjobsInput!
    $condition: ModelMechanicjobsConditionInput
  ) {
    createMechanicjobs(input: $input, condition: $condition) {
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
export const updateMechanicjobs = /* GraphQL */ `
  mutation UpdateMechanicjobs(
    $input: UpdateMechanicjobsInput!
    $condition: ModelMechanicjobsConditionInput
  ) {
    updateMechanicjobs(input: $input, condition: $condition) {
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
export const deleteMechanicjobs = /* GraphQL */ `
  mutation DeleteMechanicjobs(
    $input: DeleteMechanicjobsInput!
    $condition: ModelMechanicjobsConditionInput
  ) {
    deleteMechanicjobs(input: $input, condition: $condition) {
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
export const createUserrepairhistory = /* GraphQL */ `
  mutation CreateUserrepairhistory(
    $input: CreateUserrepairhistoryInput!
    $condition: ModelUserrepairhistoryConditionInput
  ) {
    createUserrepairhistory(input: $input, condition: $condition) {
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
export const updateUserrepairhistory = /* GraphQL */ `
  mutation UpdateUserrepairhistory(
    $input: UpdateUserrepairhistoryInput!
    $condition: ModelUserrepairhistoryConditionInput
  ) {
    updateUserrepairhistory(input: $input, condition: $condition) {
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
export const deleteUserrepairhistory = /* GraphQL */ `
  mutation DeleteUserrepairhistory(
    $input: DeleteUserrepairhistoryInput!
    $condition: ModelUserrepairhistoryConditionInput
  ) {
    deleteUserrepairhistory(input: $input, condition: $condition) {
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
export const createUservehicle = /* GraphQL */ `
  mutation CreateUservehicle(
    $input: CreateUservehicleInput!
    $condition: ModelUservehicleConditionInput
  ) {
    createUservehicle(input: $input, condition: $condition) {
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
export const updateUservehicle = /* GraphQL */ `
  mutation UpdateUservehicle(
    $input: UpdateUservehicleInput!
    $condition: ModelUservehicleConditionInput
  ) {
    updateUservehicle(input: $input, condition: $condition) {
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
export const deleteUservehicle = /* GraphQL */ `
  mutation DeleteUservehicle(
    $input: DeleteUservehicleInput!
    $condition: ModelUservehicleConditionInput
  ) {
    deleteUservehicle(input: $input, condition: $condition) {
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
export const createUserpurchases = /* GraphQL */ `
  mutation CreateUserpurchases(
    $input: CreateUserpurchasesInput!
    $condition: ModelUserpurchasesConditionInput
  ) {
    createUserpurchases(input: $input, condition: $condition) {
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
export const updateUserpurchases = /* GraphQL */ `
  mutation UpdateUserpurchases(
    $input: UpdateUserpurchasesInput!
    $condition: ModelUserpurchasesConditionInput
  ) {
    updateUserpurchases(input: $input, condition: $condition) {
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
export const deleteUserpurchases = /* GraphQL */ `
  mutation DeleteUserpurchases(
    $input: DeleteUserpurchasesInput!
    $condition: ModelUserpurchasesConditionInput
  ) {
    deleteUserpurchases(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserChatroom = /* GraphQL */ `
  mutation CreateUserChatroom(
    $input: CreateUserChatroomInput!
    $condition: ModelUserChatroomConditionInput
  ) {
    createUserChatroom(input: $input, condition: $condition) {
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
export const updateUserChatroom = /* GraphQL */ `
  mutation UpdateUserChatroom(
    $input: UpdateUserChatroomInput!
    $condition: ModelUserChatroomConditionInput
  ) {
    updateUserChatroom(input: $input, condition: $condition) {
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
export const deleteUserChatroom = /* GraphQL */ `
  mutation DeleteUserChatroom(
    $input: DeleteUserChatroomInput!
    $condition: ModelUserChatroomConditionInput
  ) {
    deleteUserChatroom(input: $input, condition: $condition) {
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
