# Virtual Queuing

1. 将设计稿划分组件层级

- APP: render title and subtitle and signup form, render page for url
  - SignUpPage
    - SignUpForm: render sign up form
    - Input: render email input
    - Input + PasswordToggle: render password input and show/hide icon
    - Input + PasswordToggle: render confirm password input and show/hide icon
  - QueueListPage
    - SideMenu: render layout of UserInfo and Navigation and CurrentQueue and NextCustomerNote
      - UserInfo: render layout of authenticated user information and DropdownMenu
        - DropdownMenu: render toggle-able dropdown
          - SignOut: render signout button
      - Navigation
        - ...
      - CurrentQueue
        - ...
      - NextCustomerNote: render the first customer note
        - ...
    - Main
      - Logo: render Logo
      - QueueListTable
        - ...
  - Input
  - PasswordVisibilityToggle
  - Logo
# virtual-queuing
