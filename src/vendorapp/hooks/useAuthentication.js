import { useSelector } from "react-redux";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../graphql/queries";

export const useAuthentication = () => {
  const getcurrentuser = async () => {
    try {
      const currentuser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      const response = await API.graphql(
        graphqlOperation(getUser, { id: currentuser.attributes.sub })
      );
      console.log({ fromvendor: response });
    } catch (err) {}
  };
  getcurrentuser();
  // const { currentuser } = useSelector((state) => state.userslice);
  let isAuthenticated;
  let vendor;
  // if (currentuser) {
  //   if (currentuser.vendortype == "dealer") {
  //     (isAuthenticated = true), (vendor = "dealer");
  //   }
  //   if (currentuser.vendortype == "mechanic") {
  //     (isAuthenticated = true), (vendor = "mechanic");
  //   }
  // } else {
  //   isAuthenticated = false;
  //   vendor = null;
  // }

  return { isAuthenticated, vendor };
};
