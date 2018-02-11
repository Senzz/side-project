declare module "iListItem" {
  export interface IListItem {
    id: string;
    author_id: string;
    tab: string;
    content: string;
    title: string;
    last_reply_at: string;
    reply_count: Number;
    visit_count: Number;
    create_at: string;
    good: Boolean;
    top: Boolean;
    author: {
      loginname: string;
      avatar_url: string; 
    };
  }
}