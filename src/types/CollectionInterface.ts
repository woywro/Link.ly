import { LinkInterface } from "./LinkInterface";
import { ShareRequestInterface } from "./ShareRequestInterface";
import { UserInterface } from "./UserInterface";

export interface CollectionInterface {
  id: string;
  value: string;
  valId: string;
  ownerId: string;
  links?: LinkInterface[];
  owner?: UserInterface;
  shareRequests?: ShareRequestInterface[];
}
