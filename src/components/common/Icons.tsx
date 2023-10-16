import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export const LoaderCircleIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("h-4 w-4 animate-spin", className)}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

export const LoaderIfvIcon = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 362 363"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_41_1495)">
      <rect x="192" y="5" width="150" height="150" rx="15" fill="#D98918" />
    </g>
    <g filter="url(#filter1_d_41_1495)">
      <rect x="20" y="3" width="150" height="150" rx="15" fill="#0081C6" />
      <path d="M103.045 30.9091V124H86.1818V30.9091H103.045Z" fill="white" />
    </g>
    <path
      d="M35.612 207.091V226H32.7591V207.091H35.612ZM55.0289 207.091V226H52.4068L42.7953 212.132H42.6199V226H39.7669V207.091H42.4075L52.0282 220.977H52.2037V207.091H55.0289ZM69.5039 212.058C69.4054 211.184 68.9992 210.507 68.2852 210.027C67.5711 209.541 66.6725 209.298 65.5891 209.298C64.8136 209.298 64.1426 209.421 63.5763 209.667C63.0101 209.907 62.57 210.239 62.256 210.664C61.9483 211.083 61.7944 211.56 61.7944 212.095C61.7944 212.545 61.899 212.932 62.1083 213.259C62.3237 213.585 62.6038 213.859 62.9485 214.08C63.2994 214.296 63.6748 214.477 64.0749 214.625C64.475 214.767 64.8597 214.884 65.229 214.976L67.0756 215.456C67.6789 215.604 68.2975 215.804 68.9315 216.056C69.5655 216.308 70.1533 216.641 70.695 217.053C71.2366 217.466 71.6737 217.977 72.006 218.586C72.3446 219.195 72.5138 219.925 72.5138 220.774C72.5138 221.845 72.2369 222.796 71.6829 223.627C71.1351 224.458 70.338 225.114 69.2915 225.594C68.2513 226.074 66.9925 226.314 65.5153 226.314C64.0996 226.314 62.8746 226.089 61.8406 225.64C60.8065 225.191 59.997 224.554 59.4123 223.729C58.8275 222.898 58.5044 221.913 58.4428 220.774H61.305C61.3604 221.457 61.582 222.027 61.9698 222.482C62.3638 222.932 62.8654 223.267 63.4748 223.489C64.0903 223.704 64.7643 223.812 65.4968 223.812C66.3031 223.812 67.0202 223.686 67.6481 223.433C68.2821 223.175 68.7807 222.818 69.1438 222.362C69.507 221.901 69.6886 221.362 69.6886 220.746C69.6886 220.186 69.5285 219.728 69.2085 219.371C68.8945 219.014 68.4667 218.718 67.9251 218.484C67.3896 218.25 66.7833 218.044 66.1062 217.866L63.8718 217.256C62.3576 216.844 61.1573 216.238 60.271 215.438C59.3907 214.637 58.9506 213.579 58.9506 212.261C58.9506 211.172 59.2461 210.221 59.837 209.408C60.4279 208.596 61.2281 207.965 62.2376 207.516C63.247 207.06 64.3858 206.832 65.6538 206.832C66.9341 206.832 68.0636 207.057 69.0423 207.506C70.0271 207.956 70.8027 208.574 71.369 209.362C71.9353 210.144 72.2307 211.043 72.2553 212.058H69.5039ZM74.9906 209.547V207.091H89.6248V209.547H83.725V226H80.8812V209.547H74.9906ZM95.7116 207.091V226H92.8587V207.091H95.7116ZM98.9339 209.547V207.091H113.568V209.547H107.668V226H104.825V209.547H98.9339ZM128.962 207.091H131.824V219.528C131.824 220.851 131.513 222.024 130.892 223.045C130.27 224.061 129.396 224.861 128.269 225.446C127.143 226.025 125.823 226.314 124.308 226.314C122.8 226.314 121.483 226.025 120.357 225.446C119.23 224.861 118.356 224.061 117.735 223.045C117.113 222.024 116.802 220.851 116.802 219.528V207.091H119.655V219.297C119.655 220.152 119.843 220.913 120.218 221.577C120.6 222.242 121.138 222.765 121.834 223.147C122.53 223.522 123.354 223.71 124.308 223.71C125.269 223.71 126.097 223.522 126.792 223.147C127.494 222.765 128.029 222.242 128.399 221.577C128.774 220.913 128.962 220.152 128.962 219.297V207.091ZM135.039 209.547V207.091H149.674V209.547H143.774V226H140.93V209.547H135.039ZM168.52 216.545C168.52 218.564 168.151 220.3 167.412 221.753C166.674 223.199 165.661 224.313 164.375 225.095C163.095 225.871 161.639 226.259 160.008 226.259C158.37 226.259 156.908 225.871 155.622 225.095C154.342 224.313 153.332 223.196 152.594 221.744C151.855 220.291 151.486 218.558 151.486 216.545C151.486 214.527 151.855 212.794 152.594 211.347C153.332 209.895 154.342 208.781 155.622 208.005C156.908 207.223 158.37 206.832 160.008 206.832C161.639 206.832 163.095 207.223 164.375 208.005C165.661 208.781 166.674 209.895 167.412 211.347C168.151 212.794 168.52 214.527 168.52 216.545ZM165.695 216.545C165.695 215.007 165.446 213.711 164.947 212.658C164.455 211.6 163.778 210.799 162.916 210.258C162.06 209.71 161.091 209.436 160.008 209.436C158.918 209.436 157.946 209.71 157.09 210.258C156.234 210.799 155.557 211.6 155.059 212.658C154.566 213.711 154.32 215.007 154.32 216.545C154.32 218.084 154.566 219.383 155.059 220.442C155.557 221.494 156.234 222.295 157.09 222.842C157.946 223.384 158.918 223.655 160.008 223.655C161.091 223.655 162.06 223.384 162.916 222.842C163.778 222.295 164.455 221.494 164.947 220.442C165.446 219.383 165.695 218.084 165.695 216.545ZM43.8801 257V238.091H55.606V240.547H46.7331V246.308H54.7658V248.755H46.7331V257H43.8801ZM59.1145 257V238.091H70.9696V240.547H61.9675V246.308H70.351V248.755H61.9675V254.544H71.0804V257H59.1145ZM80.902 257H74.7805V238.091H81.0959C82.9486 238.091 84.5398 238.469 85.8693 239.227C87.1989 239.978 88.2176 241.058 88.9254 242.467C89.6394 243.871 89.9964 245.554 89.9964 247.518C89.9964 249.487 89.6364 251.18 88.9162 252.596C88.2022 254.012 87.1681 255.101 85.8139 255.864C84.4598 256.621 82.8224 257 80.902 257ZM77.6335 254.507H80.745C82.1854 254.507 83.3826 254.236 84.3366 253.695C85.2907 253.147 86.0047 252.356 86.4787 251.322C86.9527 250.281 87.1896 249.013 87.1896 247.518C87.1896 246.034 86.9527 244.776 86.4787 243.741C86.0109 242.707 85.3123 241.923 84.3828 241.387C83.4534 240.852 82.2992 240.584 80.9205 240.584H77.6335V254.507ZM93.5442 257V238.091H105.399V240.547H96.3972V246.308H104.781V248.755H96.3972V254.544H105.51V257H93.5442ZM109.21 257V238.091H115.95C117.415 238.091 118.631 238.343 119.597 238.848C120.57 239.353 121.296 240.051 121.776 240.944C122.256 241.83 122.496 242.855 122.496 244.018C122.496 245.176 122.253 246.194 121.767 247.075C121.287 247.949 120.561 248.629 119.588 249.115C118.622 249.601 117.406 249.844 115.941 249.844H110.835V247.388H115.683C116.606 247.388 117.357 247.256 117.935 246.991C118.52 246.727 118.948 246.342 119.219 245.837C119.49 245.333 119.625 244.726 119.625 244.018C119.625 243.304 119.487 242.686 119.21 242.163C118.939 241.639 118.511 241.239 117.926 240.962C117.348 240.679 116.587 240.538 115.646 240.538H112.063V257H109.21ZM118.545 248.469L123.217 257H119.967L115.387 248.469H118.545ZM128.821 238.091V257H125.968V238.091H128.821ZM148.681 244.24H145.8C145.69 243.625 145.483 243.083 145.182 242.615C144.88 242.147 144.511 241.75 144.074 241.424C143.637 241.098 143.147 240.852 142.606 240.685C142.07 240.519 141.501 240.436 140.898 240.436C139.808 240.436 138.833 240.71 137.971 241.258C137.115 241.806 136.438 242.609 135.94 243.668C135.447 244.726 135.201 246.019 135.201 247.545C135.201 249.084 135.447 250.383 135.94 251.442C136.438 252.5 137.118 253.301 137.98 253.842C138.842 254.384 139.811 254.655 140.888 254.655C141.486 254.655 142.052 254.575 142.587 254.415C143.129 254.249 143.618 254.005 144.055 253.685C144.492 253.365 144.862 252.974 145.163 252.513C145.471 252.045 145.683 251.509 145.8 250.906L148.681 250.915C148.527 251.845 148.229 252.701 147.786 253.482C147.348 254.258 146.785 254.929 146.096 255.495C145.413 256.055 144.631 256.489 143.751 256.797C142.871 257.105 141.91 257.259 140.87 257.259C139.233 257.259 137.774 256.871 136.494 256.095C135.213 255.313 134.204 254.196 133.465 252.744C132.733 251.291 132.366 249.558 132.366 247.545C132.366 245.527 132.736 243.794 133.474 242.347C134.213 240.895 135.223 239.781 136.503 239.005C137.783 238.223 139.239 237.832 140.87 237.832C141.873 237.832 142.809 237.977 143.677 238.266C144.551 238.549 145.336 238.968 146.031 239.522C146.727 240.07 147.302 240.741 147.758 241.535C148.213 242.323 148.521 243.224 148.681 244.24ZM168.52 247.545C168.52 249.564 168.151 251.3 167.412 252.753C166.674 254.199 165.661 255.313 164.375 256.095C163.095 256.871 161.639 257.259 160.008 257.259C158.37 257.259 156.908 256.871 155.622 256.095C154.342 255.313 153.332 254.196 152.594 252.744C151.855 251.291 151.486 249.558 151.486 247.545C151.486 245.527 151.855 243.794 152.594 242.347C153.332 240.895 154.342 239.781 155.622 239.005C156.908 238.223 158.37 237.832 160.008 237.832C161.639 237.832 163.095 238.223 164.375 239.005C165.661 239.781 166.674 240.895 167.412 242.347C168.151 243.794 168.52 245.527 168.52 247.545ZM165.695 247.545C165.695 246.007 165.446 244.711 164.947 243.658C164.455 242.6 163.778 241.799 162.916 241.258C162.06 240.71 161.091 240.436 160.008 240.436C158.918 240.436 157.946 240.71 157.09 241.258C156.234 241.799 155.557 242.6 155.059 243.658C154.566 244.711 154.32 246.007 154.32 247.545C154.32 249.084 154.566 250.383 155.059 251.442C155.557 252.494 156.234 253.295 157.09 253.842C157.946 254.384 158.918 254.655 160.008 254.655C161.091 254.655 162.06 254.384 162.916 253.842C163.778 253.295 164.455 252.494 164.947 251.442C165.446 250.383 165.695 249.084 165.695 247.545ZM17.9332 269.091L23.196 284.491H23.4084L28.6712 269.091H31.755L24.9503 288H21.6541L14.8494 269.091H17.9332ZM37.3386 269.091V288H34.4856V269.091H37.3386ZM41.4934 288V269.091H44.3464V285.544H52.9146V288H41.4934ZM56.1692 288V269.091H59.0222V285.544H67.5904V288H56.1692ZM73.4071 288H70.3787L77.1834 269.091H80.4796L87.2843 288H84.2559L78.91 272.526H78.7623L73.4071 288ZM73.915 280.595H83.7388V282.996H73.915V280.595ZM90.0149 288V269.091H96.755C98.2199 269.091 99.4356 269.343 100.402 269.848C101.375 270.353 102.101 271.051 102.581 271.944C103.061 272.83 103.301 273.855 103.301 275.018C103.301 276.176 103.058 277.194 102.572 278.075C102.092 278.949 101.365 279.629 100.393 280.115C99.4264 280.601 98.2107 280.844 96.7457 280.844H91.6399V278.388H96.4872C97.4105 278.388 98.1615 278.256 98.7401 277.991C99.3248 277.727 99.7526 277.342 100.023 276.837C100.294 276.333 100.43 275.726 100.43 275.018C100.43 274.304 100.291 273.686 100.014 273.163C99.7434 272.639 99.3156 272.239 98.7308 271.962C98.1522 271.679 97.392 271.538 96.4503 271.538H92.8679V288H90.0149ZM99.3494 279.469L104.021 288H100.771L96.1918 279.469H99.3494ZM106.773 288V269.091H113.513C114.978 269.091 116.193 269.343 117.16 269.848C118.132 270.353 118.859 271.051 119.339 271.944C119.819 272.83 120.059 273.855 120.059 275.018C120.059 276.176 119.816 277.194 119.33 278.075C118.849 278.949 118.123 279.629 117.151 280.115C116.184 280.601 114.969 280.844 113.504 280.844H108.398V278.388H113.245C114.168 278.388 114.919 278.256 115.498 277.991C116.083 277.727 116.51 277.342 116.781 276.837C117.052 276.333 117.188 275.726 117.188 275.018C117.188 274.304 117.049 273.686 116.772 273.163C116.501 272.639 116.073 272.239 115.489 271.962C114.91 271.679 114.15 271.538 113.208 271.538H109.626V288H106.773ZM116.107 279.469L120.779 288H117.529L112.95 279.469H116.107ZM123.531 288V269.091H135.386V271.547H126.384V277.308H134.767V279.755H126.384V285.544H135.496V288H123.531ZM140.794 288H137.765L144.57 269.091H147.866L154.671 288H151.643L146.297 272.526H146.149L140.794 288ZM141.302 280.595H151.126V282.996H141.302V280.595ZM157.402 288V269.091H160.255V285.544H168.823V288H157.402Z"
      fill="#A8A8A8"
    />
    <path
      d="M239.182 129V35.9091H298.818V50.0455H256.045V75.3182H294.727V89.4545H256.045V129H239.182Z"
      fill="white"
    />
    <g filter="url(#filter2_d_41_1495)">
      <rect x="192" y="173" width="150" height="150" rx="15" fill="#D98918" />
      <path
        d="M242.636 200.909L266.864 274.182H267.818L292 200.909H310.545L277.727 294H256.909L224.136 200.909H242.636Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_41_1495"
        x="172"
        y="5"
        width="190"
        height="190"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.834197 0 0 0 0 0.6 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_41_1495"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_41_1495"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_41_1495"
        x="0"
        y="3"
        width="190"
        height="190"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.716667 0 0 0 0 0.901263 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_41_1495"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_41_1495"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_41_1495"
        x="172"
        y="173"
        width="190"
        height="190"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.834197 0 0 0 0 0.6 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_41_1495"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_41_1495"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const IfvLoveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 381 155"
    fill="none"
    className="w-[5rem] lg:w-[7.5rem] lg:p-0"
  >
    <path d="M26.0455 30.9091V124H9.18182V30.9091H26.0455Z" fill="#3b82f6" />
    <path
      d="M204.045 30.9091V124H187.182V30.9091H204.045ZM222.307 124V30.9091H281.943V45.0455H239.17V70.3182H277.852V84.4545H239.17V124H222.307ZM309.761 30.9091L333.989 104.182H334.943L359.125 30.9091H377.67L344.852 124H324.034L291.261 30.9091H309.761Z"
      fill="#3b82f6"
    />
    <path
      d="M107.5 124L100.178 117.31C74.17 93.642 57 77.9815 57 58.8747C57 43.2142 69.221 31 84.775 31C93.562 31 101.996 35.1052 107.5 41.5417C113.005 35.1052 121.438 31 130.225 31C145.779 31 158 43.2142 158 58.8747C158 77.9815 140.83 93.642 114.823 117.31L107.5 124Z"
      fill="#DC2626"
    />
  </svg>
);

export const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const InstagramIcon = () => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const WebsiteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

export const EnterpriseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

export const ETIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={256}
    fill="#fff"
    viewBox="-2.4 -2.4 28.8 28.8"
    className={cn("w-6 h-6", props.className)}
  >
    <path d="M14 2h-4a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3ZM9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9Zm11 4v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-7 4h2v2h-2v2h-2v-2H9v-2h2v-2h2Z" />
  </svg>
);

export const AEIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("w-6 h-6", props.className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
    />
  </svg>
);

export const FTIcon = (props: IconProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", props.className)}
  >
    <path d="M10.5 20.5l10-10a4.95 4.95 0 10-7-7l-10 10a4.95 4.95 0 107 7zM8.5 8.5l7 7" />
  </svg>
);

export const CFIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("w-6 h-6", props.className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
    />
  </svg>
);

export const DSIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("w-6 h-6", props.className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

export const HistoryIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("w-6 h-6", props.className)}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" />
  </svg>
);
