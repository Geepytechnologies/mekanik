/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReviews = /* GraphQL */ `
  subscription OnCreateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onCreateReviews(filter: $filter) {
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
export const onUpdateReviews = /* GraphQL */ `
  subscription OnUpdateReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onUpdateReviews(filter: $filter) {
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
export const onDeleteReviews = /* GraphQL */ `
  subscription OnDeleteReviews($filter: ModelSubscriptionReviewsFilterInput) {
    onDeleteReviews(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onCreateChatroom(filter: $filter) {
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
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onUpdateChatroom(filter: $filter) {
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
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onDeleteChatroom(filter: $filter) {
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
export const onCreateAccounts = /* GraphQL */ `
  subscription OnCreateAccounts($filter: ModelSubscriptionAccountsFilterInput) {
    onCreateAccounts(filter: $filter) {
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
export const onUpdateAccounts = /* GraphQL */ `
  subscription OnUpdateAccounts($filter: ModelSubscriptionAccountsFilterInput) {
    onUpdateAccounts(filter: $filter) {
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
export const onDeleteAccounts = /* GraphQL */ `
  subscription OnDeleteAccounts($filter: ModelSubscriptionAccountsFilterInput) {
    onDeleteAccounts(filter: $filter) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onCreateProducts(filter: $filter) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts($filter: ModelSubscriptionProductsFilterInput) {
    onUpdateProducts(filter: $filter) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts($filter: ModelSubscriptionProductsFilterInput) {
    onDeleteProducts(filter: $filter) {
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
export const onCreateMechanicjobrequests = /* GraphQL */ `
  subscription OnCreateMechanicjobrequests(
    $filter: ModelSubscriptionMechanicjobrequestsFilterInput
  ) {
    onCreateMechanicjobrequests(filter: $filter) {
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
export const onUpdateMechanicjobrequests = /* GraphQL */ `
  subscription OnUpdateMechanicjobrequests(
    $filter: ModelSubscriptionMechanicjobrequestsFilterInput
  ) {
    onUpdateMechanicjobrequests(filter: $filter) {
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
export const onDeleteMechanicjobrequests = /* GraphQL */ `
  subscription OnDeleteMechanicjobrequests(
    $filter: ModelSubscriptionMechanicjobrequestsFilterInput
  ) {
    onDeleteMechanicjobrequests(filter: $filter) {
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
export const onCreateMechanicjobs = /* GraphQL */ `
  subscription OnCreateMechanicjobs(
    $filter: ModelSubscriptionMechanicjobsFilterInput
  ) {
    onCreateMechanicjobs(filter: $filter) {
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
export const onUpdateMechanicjobs = /* GraphQL */ `
  subscription OnUpdateMechanicjobs(
    $filter: ModelSubscriptionMechanicjobsFilterInput
  ) {
    onUpdateMechanicjobs(filter: $filter) {
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
export const onDeleteMechanicjobs = /* GraphQL */ `
  subscription OnDeleteMechanicjobs(
    $filter: ModelSubscriptionMechanicjobsFilterInput
  ) {
    onDeleteMechanicjobs(filter: $filter) {
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
export const onCreateUserrepairhistory = /* GraphQL */ `
  subscription OnCreateUserrepairhistory(
    $filter: ModelSubscriptionUserrepairhistoryFilterInput
  ) {
    onCreateUserrepairhistory(filter: $filter) {
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
export const onUpdateUserrepairhistory = /* GraphQL */ `
  subscription OnUpdateUserrepairhistory(
    $filter: ModelSubscriptionUserrepairhistoryFilterInput
  ) {
    onUpdateUserrepairhistory(filter: $filter) {
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
export const onDeleteUserrepairhistory = /* GraphQL */ `
  subscription OnDeleteUserrepairhistory(
    $filter: ModelSubscriptionUserrepairhistoryFilterInput
  ) {
    onDeleteUserrepairhistory(filter: $filter) {
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
export const onCreateUservehicle = /* GraphQL */ `
  subscription OnCreateUservehicle(
    $filter: ModelSubscriptionUservehicleFilterInput
  ) {
    onCreateUservehicle(filter: $filter) {
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
export const onUpdateUservehicle = /* GraphQL */ `
  subscription OnUpdateUservehicle(
    $filter: ModelSubscriptionUservehicleFilterInput
  ) {
    onUpdateUservehicle(filter: $filter) {
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
export const onDeleteUservehicle = /* GraphQL */ `
  subscription OnDeleteUservehicle(
    $filter: ModelSubscriptionUservehicleFilterInput
  ) {
    onDeleteUservehicle(filter: $filter) {
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
export const onCreateUserpurchases = /* GraphQL */ `
  subscription OnCreateUserpurchases(
    $filter: ModelSubscriptionUserpurchasesFilterInput
  ) {
    onCreateUserpurchases(filter: $filter) {
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
export const onUpdateUserpurchases = /* GraphQL */ `
  subscription OnUpdateUserpurchases(
    $filter: ModelSubscriptionUserpurchasesFilterInput
  ) {
    onUpdateUserpurchases(filter: $filter) {
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
export const onDeleteUserpurchases = /* GraphQL */ `
  subscription OnDeleteUserpurchases(
    $filter: ModelSubscriptionUserpurchasesFilterInput
  ) {
    onDeleteUserpurchases(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserChatroom = /* GraphQL */ `
  subscription OnCreateUserChatroom(
    $filter: ModelSubscriptionUserChatroomFilterInput
  ) {
    onCreateUserChatroom(filter: $filter) {
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
export const onUpdateUserChatroom = /* GraphQL */ `
  subscription OnUpdateUserChatroom(
    $filter: ModelSubscriptionUserChatroomFilterInput
  ) {
    onUpdateUserChatroom(filter: $filter) {
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
export const onDeleteUserChatroom = /* GraphQL */ `
  subscription OnDeleteUserChatroom(
    $filter: ModelSubscriptionUserChatroomFilterInput
  ) {
    onDeleteUserChatroom(filter: $filter) {
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
