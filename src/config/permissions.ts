import {
  UserRole
} from "@/types/user";


export type Permission =

"manage_users"

|
"manage_settings"

|
"create_accounts"

|
"edit_accounts"

|
"delete_accounts"

|
"create_opportunities"

|
"edit_opportunities"

|
"delete_opportunities"

|
"view_forecast"

|
"manage_forecast"

|
"view_ai"

|
"manage_proposals";





const permissions:Record<UserRole,Permission[]> = {


ADMIN:[

"manage_users",

"manage_settings",

"create_accounts",

"edit_accounts",

"delete_accounts",

"create_opportunities",

"edit_opportunities",

"delete_opportunities",

"view_forecast",

"manage_forecast",

"view_ai",

"manage_proposals"

],





REVENUE_MANAGER:[

"create_accounts",

"edit_accounts",

"delete_accounts",

"create_opportunities",

"edit_opportunities",

"delete_opportunities",

"view_forecast",

"manage_forecast",

"view_ai",

"manage_proposals"

],





SALES_REP:[

"create_accounts",

"edit_accounts",

"create_opportunities",

"edit_opportunities",

"view_forecast",

"view_ai",

"manage_proposals"

],





VIEWER:[

"view_forecast",

"view_ai"

]


};





export function hasPermission(
role:UserRole,
permission:Permission
){

return permissions[role]?.includes(
permission
);

}