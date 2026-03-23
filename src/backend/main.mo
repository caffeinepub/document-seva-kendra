import Time "mo:core/Time";
import List "mo:core/List";
import Iter "mo:core/Iter";

actor {
  let enquiries = List.empty<Enquiry>();

  type Enquiry = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Int;
  };

  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, phone : Text, message : Text) : async () {
    let timestamp = Time.now();
    let enquiry : Enquiry = {
      name;
      email;
      phone;
      message;
      timestamp;
    };
    enquiries.add(enquiry);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.values().toArray();
  };
};
