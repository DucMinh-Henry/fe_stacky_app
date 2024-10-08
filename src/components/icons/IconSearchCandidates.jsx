import React from "react";

const IconSearchCandidates = ({ className, color }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 30 30"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M21.25 11.25H20.625H21.25ZM8.75 18.75H12.5C12.6 17.9 12.7875 17.05 13.125 16.25H8.75V18.75ZM14.875 13.625C16.403 12.1053 18.47 11.2516 20.625 11.25H8.75V13.75H14.775C14.8125 13.7125 14.8375 13.675 14.875 13.625ZM14.875 25.125C15.325 25.5625 15.8125 25.925 16.325 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25001C3.75 4.87501 4.875 3.75001 6.25 3.75001H11.475C11.875 2.70001 12.675 1.87501 13.75 1.50001C15.6625 0.800007 17.8125 1.80001 18.525 3.75001H23.75C24.413 3.75001 25.0489 4.0134 25.5178 4.48224C25.9866 4.95108 26.25 5.58697 26.25 6.25001V13.525C25.5272 12.8234 24.6792 12.2638 23.75 11.875V6.25001H21.25V8.75001H8.75V6.25001H6.25V23.75H13.7875C14.0875 24.2375 14.4625 24.7 14.875 25.125ZM13.75 5.00001C13.75 5.68751 14.3125 6.25001 15 6.25001C15.6875 6.25001 16.25 5.68751 16.25 5.00001C16.25 4.31251 15.6875 3.75001 15 3.75001C14.3125 3.75001 13.75 4.31251 13.75 5.00001ZM29.2375 26.25L27.5 27.9875L23.6 24.15C22.7375 24.6875 21.7125 25 20.625 25C17.5 25 15 22.5 15 19.375C15 16.25 17.5 13.75 20.625 13.75C23.75 13.75 26.25 16.25 26.25 19.375C26.25 20.475 25.9375 21.5125 25.3875 22.375L29.2375 26.25ZM23.75 19.375C23.75 18.5462 23.4208 17.7513 22.8347 17.1653C22.2487 16.5792 21.4538 16.25 20.625 16.25C19.7962 16.25 19.0013 16.5792 18.4153 17.1653C17.8292 17.7513 17.5 18.5462 17.5 19.375C17.5 20.2038 17.8292 20.9987 18.4153 21.5847C19.0013 22.1708 19.7962 22.5 20.625 22.5C21.4538 22.5 22.2487 22.1708 22.8347 21.5847C23.4208 20.9987 23.75 20.2038 23.75 19.375Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default IconSearchCandidates;
