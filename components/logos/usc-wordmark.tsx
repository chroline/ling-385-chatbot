import React from 'react'

export const USCWordmarkLogo = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 2238 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M109.676 223.594c-15.755 0-30.903-2.121-40.901-6.363-20.602-8.18-31.206-21.511-36.054-40.598-3.636-13.634-4.847-33.933-4.847-73.622V30.903c0-10.604-2.121-15.451-11.514-15.451H2.12c-1.817 0-2.12-.606-2.12-2.727V6.059c0-1.817.303-2.423 2.727-2.423 3.03 0 17.875.909 41.507.909 23.632 0 38.175-.91 41.507-.91 2.424 0 2.727.607 2.727 1.819v7.877c0 1.515-.303 2.12-2.424 2.12H70.896c-8.787 0-13.937 5.757-14.543 12.422-.303 2.727-.606 23.935-.606 39.387v19.996c0 16.058 1.212 54.535 1.515 64.23.303 13.937 2.727 28.177 9.695 38.478 11.21 16.36 30.6 21.814 48.172 21.814 17.27 0 34.842-5.757 45.446-16.664 11.816-12.725 15.755-30.903 15.755-53.323V76.955c0-23.026-.606-40.598-1.515-48.173-.909-7.877-5.756-13.33-13.634-13.33h-13.33c-1.818 0-2.121-.91-2.121-2.424V5.756c0-1.514.303-2.12 2.121-2.12 3.029 0 16.966.909 37.265.909 20.905 0 30.6-.91 33.327-.91 2.727 0 3.03 1.213 3.03 2.121v6.666c0 1.818-.303 3.03-1.818 3.03h-12.422c-11.21 0-12.119 8.483-13.028 12.118-.606 3.03-.606 46.052-.606 50.294 0 4.242-.606 57.262-1.515 69.078-1.817 24.843-8.483 43.931-25.449 58.473-12.119 11.21-30.6 18.179-56.959 18.179zM329.056 124.522v78.167c0 4.847 2.727 6.362 6.666 6.362h9.695c2.727 0 3.333.909 3.333 2.727v4.847c0 2.121-.606 3.333-2.424 3.333-2.121 0-11.513-.909-28.783-.909-15.451 0-25.146.909-27.267.909-1.818 0-2.424-.909-2.424-3.333v-4.847c0-2.121.909-2.727 3.939-2.727h8.786c3.333 0 5.756-1.515 6.059-6.968.303-7.878.606-17.573.606-25.45v-39.992c0-12.119 0-20.906-8.786-27.268-7.271-5.453-14.543-5.453-22.117-5.453-4.847 0-15.451 2.12-24.541 11.815-6.059 6.666-6.968 14.846-6.968 20.603v62.715c0 8.18.909 9.998 7.271 9.998h7.575c2.423 0 3.029.909 3.029 3.03v5.15c0 1.818-.606 2.727-2.12 2.727-2.121 0-10.301-.909-26.359-.909-15.452 0-25.147.909-26.965.909-1.514 0-2.12-.909-2.12-2.727v-5.453c0-1.818.606-2.727 3.029-2.727h8.787c3.938 0 6.059-.909 6.059-6.059v-70.896c0-9.089-4.848-14.24-12.422-17.875l-2.424-1.212c-2.12-.909-2.423-1.818-2.423-2.727v-1.515c0-1.515 1.212-2.424 2.726-3.03l26.056-14.542c2.424-1.212 4.242-2.121 5.453-2.121 1.515 0 2.121 1.212 2.424 3.636l2.121 18.481h.606c8.786-10.907 26.359-22.117 41.507-22.117 9.089 0 18.482 1.818 25.753 6.665 9.089 6.06 16.663 21.208 16.663 28.783zM379.418 175.421v-44.537c0-10.301-1.817-15.754-16.966-18.178-2.121-.303-2.727-.909-2.727-2.121v-2.727c0-.909.606-1.515 2.121-2.121 9.695-3.635 21.208-8.483 32.721-14.845 2.424-1.212 3.939-1.818 5.757-1.818 1.514 0 1.817 1.515 1.514 3.636-.606 5.15-.606 24.237-.606 49.384v33.024c0 11.816 0 22.723.303 26.056.606 5.756 1.515 7.877 4.848 7.877h13.937c2.423 0 3.029.909 3.029 2.727v5.15c0 2.121-.606 3.03-2.726 3.03-2.424 0-16.361-.909-29.086-.909-17.572 0-29.388.909-32.721.909-1.515 0-2.423-.606-2.423-2.424v-6.059c0-1.818.908-2.424 3.029-2.424h14.846c3.333 0 4.544-1.212 4.847-6.059.303-9.09.303-18.482.303-27.571zm3.03-121.189c-6.665 0-16.663-6.06-16.663-15.755 0-7.574 6.362-15.754 18.481-15.754 10.604 0 15.755 8.18 15.755 14.846 0 7.877-5.454 16.663-17.573 16.663zM470.492 144.215c1.818 5.756 14.846 40.598 18.179 46.961h.909c4.847-11.816 26.055-63.625 29.085-75.441 2.121-8.18 0-13.027-5.454-13.027h-6.059c-.909 0-1.212-1.515-1.212-3.03v-5.454c0-1.817.606-2.423 1.818-2.423 4.242 0 10.907.909 24.238.909 11.816 0 19.087-.91 21.814-.91 2.424 0 2.727.304 2.727 2.727v5.15c0 2.122 0 3.031-1.515 3.031h-5.757c-3.635 0-6.665.606-9.392 3.332-4.545 4.242-19.693 37.266-24.238 48.476-3.635 9.089-26.055 59.988-27.267 62.109-2.424 4.242-3.939 6.969-7.272 6.969-3.029 0-4.847-2.727-6.362-6.363-.606-1.515-22.723-59.079-23.632-61.503-.909-2.424-13.331-36.963-15.451-41.81-3.939-8.787-6.969-11.21-12.422-11.21h-6.06c-1.515 0-1.818-1.212-1.818-3.03v-5.454c0-2.12.606-2.423 3.333-2.423 3.333 0 8.483.909 25.45.909 16.057 0 23.935-.91 27.267-.91 2.424 0 3.03.607 3.03 2.424v5.454c0 1.818-.303 3.03-2.121 3.03h-6.059c-3.03 0-5.454 1.817-5.454 5.756 0 5.454 7.878 30.6 9.695 35.751zM644.022 138.458h-74.834c-.606 2.727-.909 7.575-.909 14.543 0 29.691 18.784 52.111 43.022 52.111 18.481 0 31.509-10.604 36.66-20.602.606-1.212 1.818-1.818 2.727-1.515l3.938 2.121c.909.303 1.515 1.212 0 4.545-5.453 12.119-21.208 33.024-48.172 33.024-17.27 0-36.357-5.151-47.567-21.511-10.604-15.452-13.331-26.662-13.331-47.87 0-11.816 3.03-32.115 19.087-48.173 13.028-13.33 28.177-16.057 43.325-16.057 34.842 0 44.537 32.721 44.537 44.537 0 4.241-3.635 4.847-8.483 4.847zm-73.622-9.089h46.961c5.756 0 8.18-1.515 8.18-4.241 0-6.969-3.636-26.965-23.329-26.965-13.331 0-26.056 8.786-31.812 31.206zM679.101 166.938v-28.48c0-15.451-2.424-18.481-10.907-23.026l-5.757-3.029c-1.818-.606-2.424-.909-2.424-2.121v-1.818c0-1.212.606-1.818 2.424-2.727l29.994-15.451c1.818-.91 3.03-1.212 4.242-1.212 1.818 0 2.121 1.818 2.121 3.636l1.515 20.905h1.212c9.089-13.937 23.329-26.359 36.356-26.359 10.301 0 15.452 6.362 15.452 13.331 0 8.786-7.271 14.845-12.725 14.845-3.333 0-6.362-1.211-8.786-2.423-2.424-1.515-6.06-2.424-9.998-2.424-4.848 0-12.725 3.03-17.876 12.725-1.817 3.332-3.029 8.786-3.029 9.695v63.624c0 9.392 2.121 12.422 8.483 12.422h14.24c1.817 0 2.12.909 2.12 2.727v5.453c0 1.818-.303 2.727-1.514 2.727-1.818 0-15.755-.909-32.116-.909-18.784 0-31.509.909-33.326.909-1.212 0-1.818-.606-1.818-3.03v-5.15c0-2.121.606-2.727 3.332-2.727h11.816c4.545 0 6.666-1.818 6.666-5.757.303-9.998.303-20.602.303-36.356zM789.631 222.685c-14.845 0-26.964-6.06-30.6-8.787-1.515-.908-1.515-2.726-1.818-4.241l-5.15-28.782c-.303-1.515.606-2.121 1.817-2.424l3.939-.909c1.212-.303 2.121.303 2.727 1.818l7.574 14.845c6.06 11.21 10.301 18.785 26.359 18.785 10.604 0 23.935-6.363 23.935-20.603 0-13.633-6.666-21.511-29.389-27.873-17.875-5.151-35.751-14.543-35.751-38.477 0-20.906 19.694-36.963 42.417-36.963 14.542 0 22.42 3.636 27.873 6.362 4.545 2.121 5.151 3.636 5.454 5.454l4.544 21.208c0 1.212-.606 2.121-2.121 2.727l-3.635 1.212c-1.212.302-1.818 0-2.727-1.515l-10.301-13.937c-3.636-5.757-9.392-11.816-21.208-11.816-11.513 0-23.329 6.968-23.329 19.996 0 17.573 14.24 20.905 29.085 25.147 22.117 6.362 36.054 15.451 36.357 38.78-.303 24.541-20.299 39.993-46.052 39.993zM864.6 175.421v-44.537c0-10.301-1.818-15.754-16.966-18.178-2.121-.303-2.727-.909-2.727-2.121v-2.727c0-.909.606-1.515 2.121-2.121 9.695-3.635 21.208-8.483 32.721-14.845 2.424-1.212 3.939-1.818 5.756-1.818 1.515 0 1.818 1.515 1.515 3.636-.606 5.15-.606 24.237-.606 49.384v33.024c0 11.816 0 22.723.303 26.056.606 5.756 1.515 7.877 4.848 7.877h13.937c2.423 0 3.029.909 3.029 2.727v5.15c0 2.121-.606 3.03-2.726 3.03-2.424 0-16.361-.909-29.086-.909-17.572 0-29.388.909-32.721.909-1.515 0-2.424-.606-2.424-2.424v-6.059c0-1.818.909-2.424 3.03-2.424h14.846c3.332 0 4.544-1.212 4.847-6.059.303-9.09.303-18.482.303-27.571zm3.03-121.189c-6.665 0-16.664-6.06-16.664-15.755 0-7.574 6.363-15.754 18.482-15.754 10.604 0 15.754 8.18 15.754 14.846 0 7.877-5.453 16.663-17.572 16.663zM947.494 150.88v30.297c0 22.723 10.301 26.662 15.755 26.662 6.968 0 15.754-1.212 19.996-3.939 1.515-.908 2.726-.606 3.635.606l1.515 2.727c.909 1.212.303 2.424-.606 3.333-3.029 3.03-15.451 12.119-33.63 12.119-14.845 0-29.388-14.24-29.388-25.753 0-12.422.909-39.083.909-43.325v-6.665c0-5.454.303-25.753.606-38.478h-18.481c-2.727 0-4.545-1.212-4.545-3.636 0-2.423 1.818-3.332 5.454-5.453 7.271-4.242 30.6-27.874 34.538-38.175.909-2.423 2.424-3.03 4.242-3.03 2.424 0 3.03 2.121 3.03 4.545l-1.515 29.995h42.113c1.818 0 2.727 1.514 2.121 2.726l-3.03 10.604c-.303 1.515-.909 2.424-2.727 2.424h-39.083a990.444 990.444 0 00-.909 42.416zM1017.58 301.458c-11.51 0-17.27-6.363-17.27-15.452 0-6.362 6.67-11.816 13.94-11.816 5.76 0 11.21 2.727 13.94 3.333 2.12.303 4.54 0 6.36-1.818 4.54-5.454 19.99-39.992 24.24-51.808-1.52-7.575-33.63-102.102-36.06-108.465-3.63-7.574-6.36-12.724-14.24-12.724h-7.87c-2.125 0-2.428-.909-2.428-2.727v-6.06c0-1.212.303-2.12 2.428-2.12 2.72 0 9.99.909 27.87.909 15.45 0 24.84-.91 28.18-.91 2.42 0 2.72.91 2.72 2.121v6.363c0 1.515-.3 2.424-1.82 2.424h-5.75c-3.33 0-4.55 2.12-3.94 6.665.91 6.665 21.51 73.319 24.84 79.985h1.22c3.02-4.848 29.38-67.563 31.2-75.137 1.82-7.575-.6-11.513-5.15-11.513h-4.85c-1.81 0-2.12-.909-2.12-2.424v-6.06c0-1.514.31-2.423 1.82-2.423 3.94 0 10.3.909 24.84.909 8.18 0 15.15-.91 18.49-.91 1.81 0 1.81 1.213 1.81 2.424v5.757c0 1.818 0 2.727-1.51 2.727h-4.85c-3.33 0-7.57 1.515-10.6 5.453-6.67 8.18-26.66 54.232-47.57 101.799-14.85 33.63-26.66 61.806-32.12 71.804-4.24 7.878-9.69 19.694-25.75 19.694zM1249.49 222.685c-14.54 0-33.32-5.757-46.05-20.905-13.94-16.664-16.66-27.874-16.66-49.385 0-15.451 8.18-34.842 26.05-48.778 15.76-12.12 30.6-14.543 40.6-14.543 16.67 0 33.33 8.483 42.42 17.572 13.63 13.937 20.6 29.692 20.6 49.385 0 33.024-29.69 66.654-66.96 66.654zm3.64-9.089c23.03 0 37.87-28.177 37.87-60.595 0-33.63-24.54-54.838-39.99-54.838-8.18 0-16.06 1.818-23.33 9.695-11.82 12.119-16.06 24.541-16.06 47.567 0 16.966 1.82 28.479 11.51 42.416 6.97 9.998 15.76 15.755 30 15.755zM1345.85 107.252h-20.9c-1.52 0-2.12-.606-1.52-3.332l1.21-9.09c.31-1.817 1.22-2.12 3.64-2.12h17.57v-5.757c0-29.994 8.49-49.687 20.3-63.018C1382.21 6.362 1398.87 0 1415.84 0c14.24 0 27.57 5.454 27.57 16.966 0 7.272-7.88 13.028-12.72 13.028-3.03 0-6.06-.606-8.49-1.818-2.72-1.514-6.06-5.453-7.27-6.968-3.94-4.848-8.18-6.968-13.94-6.968-7.87 0-16.05 2.12-22.72 10.604-11.21 14.24-10.6 40.598-10.6 61.806v6.06h36.66c2.12 0 2.42 1.817 2.12 3.03l-1.52 9.997c-.3 1.212-1.51 1.515-3.94 1.515h-33.32v26.965c0 35.751 0 63.624.3 66.957.61 5.15 1.51 7.877 7.88 7.877h17.27c2.72 0 3.33.606 3.33 2.424v4.847c0 2.424-.61 3.636-2.12 3.636-1.82 0-13.03-.909-36.36-.909-16.66 0-32.11.909-34.54.909-1.81 0-2.42-.606-2.42-2.121v-6.665c0-1.515.61-2.121 3.03-2.121h14.54c5.76 0 6.97-3.636 7.27-10.604v-91.195zM86.044 512c-21.208 0-36.054-6.362-48.172-15.755-3.636-2.726-5.454-3.635-6.969-3.635-1.818 0-3.03 2.121-4.847 5.15-1.818 3.333-3.333 3.636-5.454 3.636-1.818 0-3.333-1.515-2.727-4.848 1.212-7.574 4.242-46.051 5.15-54.838.304-1.817.91-1.817 2.122-1.817l4.544.303c1.212 0 1.818.606 1.818 2.423.303 9.695.909 19.694 10.907 35.145 9.09 14.24 25.753 22.42 42.416 22.42 18.179 0 41.205-11.21 41.205-38.477 0-31.207-22.42-42.72-46.658-51.203-9.392-3.332-31.206-10.907-44.234-24.54-9.998-9.999-15.149-24.238-15.149-44.234 0-15.149 9.392-29.995 18.785-38.781 10.907-10.301 26.055-14.543 42.416-14.543 17.269 0 30.6 5.151 35.75 7.575 2.727 1.515 4.242 1.212 5.757-.303l3.938-3.636c1.515-1.212 2.424-1.818 3.939-1.818 1.515 0 2.424 2.424 2.424 5.151 0 10.604 3.938 41.507 4.241 48.172 0 1.515-.303 2.121-1.514 2.424l-3.636.909c-.909.303-1.515 0-1.818-.909-2.424-8.786-6.362-20.602-18.784-33.63-8.18-8.786-18.784-13.028-33.024-13.028-26.965 0-36.66 19.997-36.66 35.448 0 8.483 1.818 18.481 9.392 26.359 8.787 8.786 25.753 15.451 34.54 18.178 20.904 6.665 37.871 11.816 48.778 25.147 7.877 9.392 13.331 21.208 13.331 41.204 0 35.751-21.814 66.351-61.807 66.351zM224.761 511.091c-14.543 0-33.327-5.756-46.052-20.905-13.937-16.663-16.664-27.873-16.664-49.385 0-15.451 8.18-34.841 26.056-48.778 15.754-12.119 30.6-14.543 40.598-14.543 16.664 0 33.327 8.484 42.416 17.573 13.634 13.936 20.602 29.691 20.602 49.384 0 33.024-29.691 66.654-66.956 66.654zm3.635-9.089c23.026 0 37.872-28.176 37.872-60.595 0-33.63-24.541-54.838-39.993-54.838-8.18 0-16.057 1.818-23.328 9.696-11.816 12.118-16.058 24.54-16.058 47.566 0 16.967 1.818 28.48 11.513 42.416 6.968 9.998 15.754 15.755 29.994 15.755zM410.497 423.532v22.42c0 14.543 0 29.388.606 35.751.909 9.392 4.241 10.604 7.877 10.604 1.818 0 6.362 0 9.998-.909 2.424-.606 3.333 0 3.636 1.212l.909 3.938c.303 1.818-.303 2.424-1.515 2.727l-31.812 10.604c-1.818.606-3.636 1.212-6.06 1.212-1.212 0-2.424-.606-2.727-3.636l-2.423-17.572h-.606c-8.483 11.816-26.056 21.208-41.204 21.208-8.484 0-18.482-.909-28.48-13.937-12.422-16.057-11.816-26.055-11.816-59.382v-35.145c-.303-8.483-4.544-10.604-11.513-11.513-5.15-.303-6.665-.606-6.665-2.121v-5.453c0-1.818.606-2.424 3.333-2.424h26.964c1.818 0 3.03-.303 4.242-.606 1.212 0 2.423-.303 3.332-.303 2.121 0 3.636 1.515 3.333 3.636-.303 2.726-1.212 16.966-1.212 34.842v21.511c0 12.118-3.03 31.509 6.666 45.445 7.574 10.907 16.057 11.513 24.237 11.513 8.181 0 20.3-7.877 26.056-15.148 1.212-1.515 3.03-5.454 3.03-8.18v-72.108c-.606-8.483-5.454-9.998-13.028-10.604-5.151 0-6.665-.606-6.665-2.121v-5.15c0-2.424.605-2.727 3.635-2.727h28.177c2.12 0 3.635-.303 5.15-.606 1.515 0 2.727-.303 3.636-.303 1.818 0 3.03 1.515 2.727 3.03-.303 2.727-1.818 10.604-1.818 40.295zM474.987 439.287v30.297c0 22.723 10.301 26.661 15.755 26.661 6.968 0 15.754-1.211 19.996-3.938 1.515-.909 2.727-.606 3.636.606l1.514 2.726c.909 1.212.304 2.424-.605 3.333-3.03 3.03-15.452 12.119-33.63 12.119-14.846 0-29.389-14.24-29.389-25.753 0-12.421.909-39.083.909-43.325v-6.665c0-5.453.303-25.753.606-38.477h-18.481c-2.727 0-4.545-1.212-4.545-3.636 0-2.424 1.818-3.333 5.454-5.454 7.271-4.241 30.6-27.873 34.539-38.174.909-2.424 2.423-3.03 4.241-3.03 2.424 0 3.03 2.121 3.03 4.545l-1.515 29.994h42.113c1.818 0 2.727 1.515 2.121 2.727l-3.03 10.604c-.303 1.515-.909 2.424-2.726 2.424h-39.084a990.374 990.374 0 00-.909 42.416z"
      ></path>
      <path
        fill="currentColor"
        d="M541.137 433.833v-91.498c0-18.481-3.636-21.814-14.543-25.449l-5.15-1.818c-1.818-.606-2.121-.909-2.121-1.818v-2.727c0-1.212.909-1.514 3.636-3.029l31.509-16.664c2.424-1.212 4.544-2.424 6.968-2.424 1.818 0 3.03 2.424 2.424 7.575-.606 5.15-.909 66.654-.909 81.802v19.39h1.515c10.604-12.724 28.176-19.693 41.507-19.693 12.725 0 21.511 3.939 29.994 12.119 13.634 12.725 13.028 28.177 13.028 44.537v17.27c0 16.966.606 35.75.606 41.507 0 3.635 4.848 4.544 11.21 4.544h5.151c2.423 0 3.332.606 3.332 2.727v4.545c0 2.423-.606 3.635-2.423 3.635-2.121 0-11.816-.909-29.086-.909-14.845 0-25.752.909-28.479.909-2.121 0-2.727-.909-2.727-3.332v-5.151c0-1.515.303-2.424 2.121-2.424h6.968c5.151 0 11.21-.606 11.513-5.756.303-4.242 0-20.299 0-29.994v-24.541c0-16.967-1.212-29.086-9.998-37.266-6.059-5.756-12.422-8.483-19.996-8.483-8.786 0-19.693 3.03-28.177 12.725-2.726 3.333-6.059 9.392-6.059 14.845v66.048c0 9.696.909 12.422 6.665 12.422h9.09c2.12 0 3.332.606 3.332 2.424v5.151c0 2.12-.606 3.332-2.423 3.332-2.424 0-14.846-.909-28.783-.909-15.148 0-26.661.909-29.388.909-1.212 0-2.121-.909-2.121-3.029v-5.454c0-2.121 1.212-2.424 4.545-2.424h6.362c4.848 0 9.392-1.212 9.998-4.847.909-5.757.909-39.084.909-58.777zM769.294 426.865H694.46c-.606 2.727-.909 7.574-.909 14.542 0 29.692 18.784 52.112 43.022 52.112 18.481 0 31.509-10.604 36.66-20.602.606-1.212 1.818-1.818 2.727-1.515l3.938 2.121c.909.303 1.515 1.211 0 4.544-5.453 12.119-21.208 33.024-48.172 33.024-17.27 0-36.357-5.15-47.567-21.511-10.604-15.452-13.331-26.662-13.331-47.87 0-11.815 3.03-32.115 19.087-48.172 13.028-13.331 28.177-16.058 43.325-16.058 34.842 0 44.537 32.721 44.537 44.537 0 4.242-3.635 4.848-8.483 4.848zm-73.622-9.089h46.961c5.756 0 8.18-1.515 8.18-4.242 0-6.968-3.636-26.965-23.329-26.965-13.331 0-26.056 8.787-31.812 31.207zM804.373 455.344v-28.479c0-15.452-2.424-18.482-10.907-23.026l-5.757-3.03c-1.818-.606-2.424-.909-2.424-2.121v-1.817c0-1.212.606-1.818 2.424-2.727l29.994-15.452c1.818-.909 3.03-1.212 4.242-1.212 1.818 0 2.121 1.818 2.121 3.636l1.515 20.905h1.212c9.089-13.937 23.329-26.359 36.356-26.359 10.301 0 15.452 6.363 15.452 13.331 0 8.786-7.271 14.846-12.725 14.846-3.333 0-6.362-1.212-8.786-2.424-2.424-1.515-6.06-2.424-9.998-2.424-4.848 0-12.725 3.03-17.876 12.725-1.817 3.333-3.029 8.786-3.029 9.695v63.624c0 9.393 2.12 12.422 8.483 12.422h14.24c1.817 0 2.12.909 2.12 2.727v5.454c0 1.817-.303 2.726-1.514 2.726-1.818 0-15.755-.909-32.116-.909-18.784 0-31.509.909-33.327.909-1.211 0-1.817-.606-1.817-3.029v-5.151c0-2.121.606-2.727 3.332-2.727h11.816c4.545 0 6.666-1.817 6.666-5.756.303-9.998.303-20.602.303-36.357zM1010.95 412.928v78.167c0 4.847 2.72 6.362 6.66 6.362h9.7c2.72 0 3.33.909 3.33 2.727v4.848c0 2.12-.61 3.332-2.43 3.332-2.12 0-11.51-.909-28.778-.909-15.451 0-25.146.909-27.267.909-1.818 0-2.424-.909-2.424-3.332v-4.848c0-2.121.909-2.727 3.939-2.727h8.786c3.333 0 5.756-1.514 6.059-6.968.303-7.877.606-17.572.606-25.45v-39.992c0-12.119 0-20.905-8.786-27.268-7.271-5.453-14.543-5.453-22.117-5.453-4.847 0-15.451 2.121-24.541 11.816-6.059 6.665-6.968 14.845-6.968 20.602v62.715c0 8.18.909 9.998 7.271 9.998h7.575c2.423 0 3.029.909 3.029 3.03v5.151c0 1.817-.606 2.726-2.12 2.726-2.121 0-10.301-.909-26.359-.909-15.452 0-25.147.909-26.965.909-1.514 0-2.12-.909-2.12-2.726v-5.454c0-1.818.606-2.727 3.029-2.727h8.787c3.938 0 6.059-.909 6.059-6.059v-70.896c0-9.089-4.848-14.239-12.422-17.875l-2.424-1.212c-2.12-.909-2.423-1.818-2.423-2.727v-1.515c0-1.514 1.212-2.423 2.726-3.029l26.056-14.543c2.424-1.212 4.242-2.121 5.453-2.121 1.515 0 2.121 1.212 2.424 3.636l2.121 18.481h.606c8.786-10.907 26.359-22.117 41.507-22.117 9.089 0 18.482 1.818 25.753 6.666 9.088 6.059 16.668 21.208 16.668 28.782zM1211.25 512c-35.75 0-58.47-11.21-76.65-27.873-21.82-20.603-32.42-55.747-32.42-84.833 0-28.176 9.09-57.261 30.9-80.287 15.46-16.361 42.72-30.601 75.75-30.601 27.57 0 50.29 10.301 61.2 16.664 3.94 2.424 5.45 2.121 6.06 0l2.42-8.786c.61-1.818 1.21-1.818 3.94-1.818s3.33.606 3.33 4.847c0 5.757 6.06 50.294 7.58 58.777.3 1.515 0 2.727-1.22 3.03l-4.54 1.212c-1.52.303-2.12 0-3.03-2.424-4.24-9.998-10.91-24.541-23.63-37.569-12.73-13.028-28.78-23.329-52.72-23.329-54.23 0-76.05 48.173-75.74 92.407 0 17.572 5.45 51.808 29.08 77.864 20.61 23.026 37.87 25.45 58.17 25.45 34.24 0 60.9-18.785 74.84-38.478.91-1.515 1.51-1.818 2.42-.909l3.94 3.03c.91.606 1.52 1.212.61 2.727-18.18 26.358-47.57 50.899-90.29 50.899zM1401.85 471.402c0 17.269 3.63 22.723 9.09 22.723 4.85 0 9.09-2.424 10.6-4.545 1.21-1.515 1.82-2.121 3.03-1.212l3.03 2.424c.91.909 1.52 2.424-.3 5.453-2.43 4.545-8.18 14.846-23.63 14.846-10.91 0-18.79-7.877-21.51-20.299h-.61c-6.36 7.574-16.36 13.937-30 18.481-5.75 1.818-11.21 1.818-17.87 1.818-7.27 0-18.18-6.059-18.18-25.147 0-13.936 6.36-26.055 30.3-36.659 13.63-6.06 29.39-13.331 34.23-17.573v-19.39c-.6-5.15-.9-13.028-4.24-16.966-3.33-3.939-9.39-6.666-18.18-6.666-6.06 0-15.45 2.424-19.69 6.363-4.24 3.938-1.51 8.483-1.51 13.936 0 10.604-3.64 17.27-16.06 17.27-4.85 0-7.27-2.727-7.27-9.695 0-9.695 8.48-21.208 20.9-28.48 12.73-7.574 23.33-10.604 36.97-10.604 14.23 0 19.99 4.242 24.23 8.181 6.37 6.362 6.67 13.33 6.67 21.511v64.23zm-22.12 6.665v-37.266c-10.91 8.181-40.6 14.24-40.6 39.387 0 11.21 6.67 16.663 15.76 16.663 8.78 0 24.84-10.604 24.84-18.784zM1477.22 390.205v26.965c0 15.754-.01 61.503.3 70.895.3 5.151 1.51 9.392 7.88 9.392h13.63c2.73 0 3.33.909 3.33 2.727v5.151c0 1.817-.6 3.029-1.82 3.029-2.12 0-15.45-.909-34.23-.909-19.39 0-31.51.909-34.24.909-1.51 0-2.12-1.212-2.12-3.029v-5.151c0-2.121.61-2.727 3.94-2.727h14.54c3.34 0 6.37-2.12 6.67-7.574.3-9.392.3-61.503.3-79.076V391.72c0-21.511-.3-49.082-.91-56.959-.6-10.301-5.45-15.148-15.15-18.178l-6.06-2.121c-1.51-.606-1.81-.909-1.81-1.515v-2.424c0-.909.91-1.514 2.72-2.12 10.61-4.848 24.24-10.301 35.45-17.573 2.73-1.818 4.55-2.424 6.36-2.424 2.12 0 2.73 1.515 2.43 5.454-.31 16.663-1.21 79.682-1.21 96.345zM1536.25 463.827V419.29c0-10.301-1.82-15.754-16.96-18.178-2.13-.303-2.73-.909-2.73-2.121v-2.726c0-.909.6-1.515 2.12-2.121 9.69-3.636 21.21-8.483 32.72-14.846 2.42-1.212 3.94-1.818 5.76-1.818 1.51 0 1.81 1.515 1.51 3.636-.6 5.15-.6 24.238-.6 49.384v33.024c0 11.816 0 22.723.3 26.056.6 5.757 1.51 7.877 4.85 7.877h13.93c2.43 0 3.03.909 3.03 2.727v5.151c0 2.12-.6 3.029-2.72 3.029-2.43 0-16.36-.909-29.09-.909-17.57 0-29.39.909-32.72.909-1.51 0-2.42-.606-2.42-2.423v-6.06c0-1.818.91-2.424 3.03-2.424h14.84c3.33 0 4.55-1.212 4.85-6.059.3-9.089.3-18.481.3-27.571zm3.03-121.189c-6.66 0-16.66-6.059-16.66-15.754 0-7.574 6.36-15.755 18.48-15.755 10.6 0 15.75 8.181 15.75 14.846 0 7.877-5.45 16.663-17.57 16.663zM1614 395.659h-20.91c-1.51 0-2.12-.606-1.51-3.333l1.21-9.089c.3-1.818 1.21-2.121 3.63-2.121H1614v-5.757c0-29.994 8.48-49.687 20.29-63.018 16.06-17.572 32.73-23.935 49.69-23.935 14.24 0 27.57 5.454 27.57 16.967 0 7.271-7.87 13.028-12.72 13.028-3.03 0-6.06-.606-8.49-1.818-2.72-1.515-6.06-5.454-7.27-6.969-3.94-4.847-8.18-6.968-13.93-6.968-7.88 0-16.06 2.121-22.73 10.604-11.21 14.24-10.6 40.598-10.6 61.806v6.06h36.66c2.12 0 2.42 1.818 2.12 3.03l-1.52 9.998c-.3 1.212-1.51 1.515-3.93 1.515h-33.33v26.964c0 35.751 0 63.624.3 66.957.61 5.151 1.52 7.877 7.88 7.877h17.27c2.73 0 3.33.606 3.33 2.424v4.848c0 2.423-.6 3.635-2.12 3.635-1.82 0-13.03-.909-36.36-.909-16.66 0-32.11.909-34.53.909-1.82 0-2.43-.606-2.43-2.12v-6.666c0-1.515.61-2.121 3.03-2.121h14.54c5.76 0 6.97-3.635 7.28-10.604v-91.194z"
      ></path>
      <path
        fill="currentColor"
        d="M1733.5 511.091c-14.54 0-33.32-5.756-46.05-20.905-13.93-16.663-16.66-27.873-16.66-49.385 0-15.451 8.18-34.841 26.05-48.778 15.76-12.119 30.6-14.543 40.6-14.543 16.67 0 33.33 8.484 42.42 17.573 13.63 13.936 20.6 29.691 20.6 49.384 0 33.024-29.69 66.654-66.96 66.654zm3.64-9.089c23.03 0 37.87-28.176 37.87-60.595 0-33.63-24.54-54.838-39.99-54.838-8.18 0-16.06 1.818-23.33 9.696-11.82 12.118-16.06 24.54-16.06 47.566 0 16.967 1.82 28.48 11.52 42.416 6.96 9.998 15.75 15.755 29.99 15.755zM1823.8 455.344v-28.479c0-15.452-2.42-18.482-10.9-23.026l-5.76-3.03c-1.82-.606-2.42-.909-2.42-2.121v-1.817c0-1.212.6-1.818 2.42-2.727l29.99-15.452c1.82-.909 3.03-1.212 4.25-1.212 1.81 0 2.12 1.818 2.12 3.636l1.51 20.905h1.21c9.09-13.937 23.33-26.359 36.36-26.359 10.3 0 15.45 6.363 15.45 13.331 0 8.786-7.27 14.846-12.72 14.846-3.34 0-6.37-1.212-8.79-2.424-2.42-1.515-6.06-2.424-10-2.424-4.84 0-12.72 3.03-17.87 12.725-1.82 3.333-3.03 8.786-3.03 9.695v63.624c0 9.393 2.12 12.422 8.48 12.422h14.24c1.82 0 2.12.909 2.12 2.727v5.454c0 1.817-.3 2.726-1.51 2.726-1.82 0-15.76-.909-32.12-.909-18.78 0-31.51.909-33.33.909-1.21 0-1.81-.606-1.81-3.029v-5.151c0-2.121.6-2.727 3.33-2.727h11.82c4.54 0 6.66-1.817 6.66-5.756.3-9.998.3-20.602.3-36.357zM2025.8 412.928v78.167c0 4.847 2.72 6.362 6.66 6.362h9.7c2.72 0 3.33.909 3.33 2.727v4.848c0 2.12-.61 3.332-2.42 3.332-2.13 0-11.52-.909-28.79-.909-15.45 0-25.14.909-27.26.909-1.82 0-2.43-.909-2.43-3.332v-4.848c0-2.121.91-2.727 3.94-2.727h8.79c3.33 0 5.75-1.514 6.06-6.968.3-7.877.6-17.572.6-25.45v-39.992c0-12.119 0-20.905-8.78-27.268-7.28-5.453-14.55-5.453-22.12-5.453-4.85 0-15.45 2.121-24.54 11.816-6.06 6.665-6.97 14.845-6.97 20.602v62.715c0 8.18.91 9.998 7.27 9.998h7.58c2.42 0 3.03.909 3.03 3.03v5.151c0 1.817-.61 2.726-2.13 2.726-2.12 0-10.3-.909-26.35-.909-15.46 0-25.15.909-26.97.909-1.51 0-2.12-.909-2.12-2.726v-5.454c0-1.818.61-2.727 3.03-2.727h8.79c3.94 0 6.06-.909 6.06-6.059v-70.896c0-9.089-4.85-14.239-12.43-17.875l-2.42-1.212c-2.12-.909-2.42-1.818-2.42-2.727v-1.515c0-1.514 1.21-2.423 2.72-3.029l26.06-14.543c2.42-1.212 4.24-2.121 5.45-2.121 1.52 0 2.12 1.212 2.43 3.636l2.12 18.481h.6c8.79-10.907 26.36-22.117 41.51-22.117 9.09 0 18.48 1.818 25.75 6.666 9.09 6.059 16.67 21.208 16.67 28.782zM2073.13 463.827V419.29c0-10.301-1.82-15.754-16.97-18.178-2.12-.303-2.72-.909-2.72-2.121v-2.726c0-.909.6-1.515 2.12-2.121 9.69-3.636 21.2-8.483 32.72-14.846 2.42-1.212 3.94-1.818 5.75-1.818 1.52 0 1.82 1.515 1.52 3.636-.61 5.15-.61 24.238-.61 49.384v33.024c0 11.816 0 22.723.31 26.056.6 5.757 1.51 7.877 4.84 7.877h13.94c2.42 0 3.03.909 3.03 2.727v5.151c0 2.12-.61 3.029-2.73 3.029-2.42 0-16.36-.909-29.08-.909-17.58 0-29.39.909-32.72.909-1.52 0-2.43-.606-2.43-2.423v-6.06c0-1.818.91-2.424 3.03-2.424h14.85c3.33 0 4.54-1.212 4.85-6.059.3-9.089.3-18.481.3-27.571zm3.03-121.189c-6.67 0-16.67-6.059-16.67-15.754 0-7.574 6.37-15.755 18.49-15.755 10.6 0 15.75 8.181 15.75 14.846 0 7.877-5.45 16.663-17.57 16.663zM2211.16 471.402c0 17.269 3.64 22.723 9.09 22.723 4.85 0 9.09-2.424 10.61-4.545 1.21-1.515 1.81-2.121 3.03-1.212l3.03 2.424c.9.909 1.51 2.424-.31 5.453-2.42 4.545-8.18 14.846-23.63 14.846-10.91 0-18.78-7.877-21.51-20.299h-.61c-6.36 7.574-16.36 13.937-29.99 18.481-5.76 1.818-11.21 1.818-17.88 1.818-7.27 0-18.17-6.059-18.17-25.147 0-13.936 6.36-26.055 30.29-36.659 13.64-6.06 29.39-13.331 34.24-17.573v-19.39c-.61-5.15-.91-13.028-4.24-16.966-3.34-3.939-9.39-6.666-18.18-6.666-6.06 0-15.45 2.424-19.69 6.363-4.25 3.938-1.52 8.483-1.52 13.936 0 10.604-3.63 17.27-16.06 17.27-4.84 0-7.27-2.727-7.27-9.695 0-9.695 8.49-21.208 20.91-28.48 12.72-7.574 23.33-10.604 36.96-10.604 14.24 0 20 4.242 24.24 8.181 6.36 6.362 6.66 13.33 6.66 21.511v64.23zm-22.11 6.665v-37.266c-10.91 8.181-40.6 14.24-40.6 39.387 0 11.21 6.66 16.663 15.75 16.663 8.79 0 24.85-10.604 24.85-18.784z"
      ></path>
    </svg>
  )
})
