// Create background particles
function createBackgroundParticles() {
  const container = document.getElementById('backgroundParticles');
  const particleCount = 60;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 25 + 's';
    particle.style.animationDuration = (20 + Math.random() * 10) + 's';
    container.appendChild(particle);
  }
}

// Loading text messages
const loadingMessages = [
  'Loading...',
  'Initializing...',
  'Zaid is Coding...',
  'Almost ready...',
  'Finalizing...'
];
let messageIndex = 0;
let loadingInterval;

function updateLoadingText() {
  const loadingText = document.getElementById('loadingText');
  loadingText.textContent = loadingMessages[messageIndex];
  messageIndex = (messageIndex + 1) % loadingMessages.length;
}

// Show animation function
function showAnimation(type) {
  const overlay = document.getElementById('loadingOverlay');
  const container = document.getElementById('animationContainer');

  overlay.classList.add('active');

  // Start loading text rotation
  loadingInterval = setInterval(updateLoadingText, 1500);

  // Clear previous animation
  container.innerHTML = '';

  switch (type) {
    case 'orbital':
      createOrbitalSystem(container);
      break;
    case 'quantum':
      createQuantumNetwork(container);
      break;
    case 'neural':
      createNeuralWave(container);
      break;
    case 'dna':
      createDNAHelix(container);
      break;
    case 'spiral':
      createHypnoticSpiral(container);
      break;
    case 'morph':
      createMorphingGeometry(container);
      break;
  }
}

function hideAnimation() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.classList.remove('active');
  clearInterval(loadingInterval);
}

// Animation 1: Orbital System
function createOrbitalSystem(container) {
  container.innerHTML = `
                  <div class="loader-container">
    <div class="orbital-rings">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>
    </div>

    <svg class="flowing-lines" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4a6cf7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00d4ff;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00d4ff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00ff88;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#00ff88;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#4a6cf7;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#4a6cf7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#00ff88;stop-opacity:1" />
        </linearGradient>
      </defs>

      <path class="line-path line-1" d="M50,300 Q200,100 400,300 T750,300" />
      <path class="line-path line-2" d="M750,150 Q600,350 400,150 T50,150" />
      <path class="line-path line-3" d="M50,450 Q200,250 400,450 T750,450" />
      <path class="line-path line-4" d="M750,500 Q600,200 400,500 T50,500" />
    </svg>

    <div class="logo-container">
      <svg width="148" height="21" viewBox="0 0 148 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.5223 20.5577C20.3272 20.5577 20.1587 20.4957 20.0168 20.3715C19.8926 20.2296 19.8306 20.0611 19.8306 19.866V7.41442C19.8306 7.21931 19.8926 7.05967 20.0168 6.93551C20.1587 6.79361 20.3272 6.72267 20.5223 6.72267H24.3802C24.5753 6.72267 24.7349 6.79361 24.8591 6.93551C25.001 7.05967 25.0719 7.21931 25.0719 7.41442V8.39884C25.604 7.88446 26.2071 7.4765 26.8811 7.17497C27.5729 6.87343 28.3267 6.72267 29.1426 6.72267H30.3399C30.535 6.72267 30.7035 6.79361 30.8454 6.93551C30.9873 7.05967 31.0583 7.21931 31.0583 7.41442V10.8466C31.0583 11.0417 30.9873 11.2102 30.8454 11.3521C30.7035 11.494 30.535 11.5649 30.3399 11.5649H27.36C26.7215 11.5649 26.2337 11.7334 25.8967 12.0705C25.5597 12.3897 25.3912 12.8686 25.3912 13.5072V19.866C25.3912 20.0611 25.3203 20.2296 25.1784 20.3715C25.0542 20.4957 24.8946 20.5577 24.6994 20.5577H20.5223Z"
          fill="white" />
        <path
          d="M40.5919 20.5577C39.3858 20.5577 38.3215 20.3804 37.3992 20.0256C36.4946 19.6709 35.7851 19.0944 35.2707 18.2962C34.7741 17.4803 34.5258 16.4072 34.5258 15.0769V10.7934H32.4239C32.2288 10.7934 32.0603 10.7313 31.9184 10.6071C31.7942 10.4652 31.7321 10.2967 31.7321 10.1016V7.41442C31.7321 7.21931 31.7942 7.05967 31.9184 6.93551C32.0603 6.79361 32.2288 6.72267 32.4239 6.72267H34.5258V2.3593C34.5258 2.16419 34.5878 2.00455 34.712 1.88039C34.8539 1.73849 35.0224 1.66755 35.2175 1.66755H39.0754C39.2705 1.66755 39.4301 1.73849 39.5543 1.88039C39.6962 2.00455 39.7671 2.16419 39.7671 2.3593V6.72267H43.1195C43.3146 6.72267 43.4742 6.79361 43.5984 6.93551C43.7403 7.05967 43.8112 7.21931 43.8112 7.41442V10.1016C43.8112 10.2967 43.7403 10.4652 43.5984 10.6071C43.4742 10.7313 43.3146 10.7934 43.1195 10.7934H39.7671V14.6246C39.7671 15.139 39.8735 15.547 40.0864 15.8485C40.2992 16.1323 40.6362 16.2742 41.0974 16.2742H43.3323C43.5274 16.2742 43.687 16.3451 43.8112 16.487C43.9531 16.6112 44.0241 16.7708 44.0241 16.9659V19.866C44.0241 20.0611 43.9531 20.2296 43.8112 20.3715C43.687 20.4957 43.5274 20.5577 43.3323 20.5577H40.5919Z"
          fill="white" />
        <path
          d="M46.7645 20.5577C46.5694 20.5577 46.4008 20.4957 46.259 20.3715C46.1348 20.2296 46.0727 20.0611 46.0727 19.866V2.3593C46.0727 2.16419 46.1348 2.00455 46.259 1.88039C46.4008 1.73849 46.5694 1.66755 46.7645 1.66755H50.7287C50.9061 1.66755 51.0657 1.73849 51.2076 1.88039C51.3495 2.00455 51.4205 2.16419 51.4205 2.3593V19.866C51.4205 20.0611 51.3495 20.2296 51.2076 20.3715C51.0657 20.4957 50.9061 20.5577 50.7287 20.5577H46.7645Z"
          fill="white" />
        <path
          d="M67.1155 20.8238C65.2531 20.8238 63.7011 20.5666 62.4594 20.0522C61.2356 19.5201 60.3132 18.8372 59.6924 18.0036C59.0894 17.1522 58.7701 16.2564 58.7346 15.3164C58.7346 15.1567 58.7878 15.0237 58.8943 14.9173C59.0007 14.8109 59.1337 14.7576 59.2933 14.7576H63.5237C63.772 14.7576 63.9671 14.802 64.109 14.8907C64.2509 14.9616 64.4017 15.068 64.5613 15.2099C64.7209 15.4051 64.9072 15.5913 65.12 15.7687C65.3329 15.9283 65.6078 16.0613 65.9448 16.1678C66.2818 16.2564 66.672 16.3008 67.1155 16.3008C67.9314 16.3008 68.5611 16.1944 69.0045 15.9815C69.4479 15.7509 69.6696 15.4405 69.6696 15.0503C69.6696 14.7488 69.5455 14.5005 69.2972 14.3053C69.0666 14.1102 68.6675 13.9329 68.0999 13.7732C67.5323 13.6136 66.7607 13.4451 65.7852 13.2677C64.4194 13.0371 63.2399 12.7001 62.2466 12.2567C61.2533 11.7955 60.4906 11.1836 59.9585 10.4209C59.4441 9.64045 59.1869 8.68263 59.1869 7.54745C59.1869 6.39453 59.5062 5.37463 60.1447 4.48777C60.801 3.60091 61.7056 2.90915 62.8585 2.41251C64.0292 1.91587 65.3861 1.66755 66.9292 1.66755C68.2063 1.66755 69.3326 1.83605 70.3082 2.17306C71.3015 2.51006 72.1351 2.9535 72.8091 3.50335C73.4832 4.03547 73.9975 4.61193 74.3523 5.23274C74.707 5.85354 74.8933 6.44774 74.911 7.01533C74.911 7.17497 74.8489 7.31686 74.7248 7.44103C74.6183 7.54745 74.4942 7.60066 74.3523 7.60066H69.9091C69.6963 7.60066 69.51 7.56519 69.3504 7.49424C69.2085 7.42329 69.0754 7.308 68.9513 7.14836C68.8626 6.90004 68.6409 6.67832 68.2861 6.48321C67.9314 6.2881 67.4791 6.19055 66.9292 6.19055C66.3262 6.19055 65.865 6.29697 65.5457 6.50982C65.2265 6.70493 65.0668 6.99759 65.0668 7.38781C65.0668 7.65387 65.1644 7.88446 65.3595 8.07957C65.5546 8.27468 65.9005 8.45205 66.3971 8.61168C66.8938 8.75358 67.5855 8.91322 68.4724 9.09059C70.1574 9.33891 71.5143 9.69366 72.5431 10.1548C73.5896 10.616 74.3523 11.2191 74.8312 11.964C75.3101 12.709 75.5495 13.6402 75.5495 14.7576C75.5495 16.017 75.1859 17.099 74.4587 18.0036C73.7315 18.9082 72.7293 19.6088 71.4522 20.1054C70.1929 20.5843 68.7473 20.8238 67.1155 20.8238Z"
          fill="white" />
        <path
          d="M85.3854 20.5577C84.1793 20.5577 83.115 20.3804 82.1927 20.0256C81.2881 19.6709 80.5786 19.0944 80.0642 18.2962C79.5676 17.4803 79.3193 16.4072 79.3193 15.0769V10.7934H77.2174C77.0223 10.7934 76.8538 10.7313 76.7119 10.6071C76.5877 10.4652 76.5257 10.2967 76.5257 10.1016V7.41442C76.5257 7.21931 76.5877 7.05967 76.7119 6.93551C76.8538 6.79361 77.0223 6.72267 77.2174 6.72267H79.3193V2.3593C79.3193 2.16419 79.3814 2.00455 79.5055 1.88039C79.6474 1.73849 79.8159 1.66755 80.011 1.66755H83.8689C84.064 1.66755 84.2236 1.73849 84.3478 1.88039C84.4897 2.00455 84.5606 2.16419 84.5606 2.3593V6.72267H87.913C88.1081 6.72267 88.2677 6.79361 88.3919 6.93551C88.5338 7.05967 88.6047 7.21931 88.6047 7.41442V10.1016C88.6047 10.2967 88.5338 10.4652 88.3919 10.6071C88.2677 10.7313 88.1081 10.7934 87.913 10.7934H84.5606V14.6246C84.5606 15.139 84.6671 15.547 84.8799 15.8485C85.0928 16.1323 85.4298 16.2742 85.8909 16.2742H88.1258C88.3209 16.2742 88.4806 16.3451 88.6047 16.487C88.7466 16.6112 88.8176 16.7708 88.8176 16.9659V19.866C88.8176 20.0611 88.7466 20.2296 88.6047 20.3715C88.4806 20.4957 88.3209 20.5577 88.1258 20.5577H85.3854Z"
          fill="white" />
        <path
          d="M95.9213 20.8238C94.9635 20.8238 94.0855 20.6021 93.2874 20.1586C92.5069 19.7152 91.8861 19.0501 91.4249 18.1632C90.9638 17.2763 90.7332 16.1589 90.7332 14.8109V7.41442C90.7332 7.21931 90.7953 7.05967 90.9194 6.93551C91.0613 6.79361 91.2298 6.72267 91.4249 6.72267H95.6287C95.8238 6.72267 95.9834 6.79361 96.1076 6.93551C96.2495 7.05967 96.3204 7.21931 96.3204 7.41442V14.6246C96.3204 15.9904 96.9324 16.6733 98.1562 16.6733C98.7416 16.6733 99.1939 16.4959 99.5131 16.1412C99.8502 15.7864 100.019 15.2809 100.019 14.6246V7.41442C100.019 7.21931 100.081 7.05967 100.205 6.93551C100.347 6.79361 100.515 6.72267 100.71 6.72267H104.914C105.092 6.72267 105.251 6.79361 105.393 6.93551C105.535 7.05967 105.606 7.21931 105.606 7.41442V19.866C105.606 20.0611 105.535 20.2296 105.393 20.3715C105.251 20.4957 105.092 20.5577 104.914 20.5577H101.03C100.835 20.5577 100.666 20.4957 100.524 20.3715C100.4 20.2296 100.338 20.0611 100.338 19.866V18.9082C99.8945 19.5644 99.2914 20.0522 98.5287 20.3715C97.766 20.673 96.8969 20.8238 95.9213 20.8238Z"
          fill="white" />
        <path
          d="M113.594 20.8238C112.778 20.8238 112.033 20.6996 111.359 20.4513C110.685 20.203 110.099 19.8216 109.603 19.3073C109.106 18.7929 108.716 18.1455 108.432 17.365C108.148 16.5846 107.98 15.6711 107.927 14.6246C107.909 14.2344 107.9 13.8974 107.9 13.6136C107.9 13.3298 107.909 13.0017 107.927 12.6292C107.962 11.6359 108.122 10.7579 108.406 9.99519C108.689 9.21475 109.08 8.56734 109.576 8.05296C110.073 7.53858 110.658 7.14836 111.332 6.8823C112.024 6.59851 112.778 6.45661 113.594 6.45661C114.392 6.45661 115.101 6.58964 115.722 6.85569C116.343 7.10402 116.866 7.44103 117.292 7.86672V2.3593C117.292 2.16419 117.354 2.00455 117.478 1.88039C117.62 1.73849 117.789 1.66755 117.984 1.66755H122.081C122.276 1.66755 122.436 1.73849 122.56 1.88039C122.702 2.00455 122.773 2.16419 122.773 2.3593V19.866C122.773 20.0611 122.702 20.2296 122.56 20.3715C122.436 20.4957 122.276 20.5577 122.081 20.5577H118.303C118.126 20.5577 117.966 20.4957 117.824 20.3715C117.682 20.2296 117.611 20.0611 117.611 19.866V19.121C117.185 19.6354 116.645 20.0522 115.988 20.3715C115.35 20.673 114.551 20.8238 113.594 20.8238ZM115.403 16.6733C115.864 16.6733 116.228 16.5757 116.494 16.3806C116.778 16.1855 116.973 15.9283 117.079 15.609C117.203 15.2898 117.274 14.935 117.292 14.5448C117.327 14.1546 117.345 13.8176 117.345 13.5338C117.345 13.25 117.327 12.9218 117.292 12.5494C117.274 12.1769 117.194 11.8487 117.052 11.5649C116.928 11.2811 116.733 11.0506 116.467 10.8732C116.201 10.6958 115.846 10.6071 115.403 10.6071C114.959 10.6071 114.605 10.7047 114.339 10.8998C114.073 11.0772 113.877 11.3344 113.753 11.6714C113.647 11.9906 113.576 12.3631 113.54 12.7888C113.487 13.3564 113.487 13.924 113.54 14.4916C113.576 14.9173 113.647 15.2986 113.753 15.6356C113.877 15.9549 114.073 16.2121 114.339 16.4072C114.605 16.5846 114.959 16.6733 115.403 16.6733Z"
          fill="white" />
        <path
          d="M126.244 20.5577C126.049 20.5577 125.881 20.4957 125.739 20.3715C125.615 20.2296 125.553 20.0611 125.553 19.866V7.41442C125.553 7.21931 125.615 7.05967 125.739 6.93551C125.881 6.79361 126.049 6.72267 126.244 6.72267H130.182C130.377 6.72267 130.546 6.79361 130.688 6.93551C130.829 7.05967 130.9 7.21931 130.9 7.41442V19.866C130.9 20.0611 130.829 20.2296 130.688 20.3715C130.546 20.4957 130.377 20.5577 130.182 20.5577H126.244ZM126.298 4.99328C126.102 4.99328 125.934 4.9312 125.792 4.80704C125.668 4.66514 125.606 4.49664 125.606 4.30153V1.50791C125.606 1.3128 125.668 1.1443 125.792 1.0024C125.934 0.8605 126.102 0.789551 126.298 0.789551H130.129C130.324 0.789551 130.492 0.8605 130.634 1.0024C130.776 1.1443 130.847 1.3128 130.847 1.50791V4.30153C130.847 4.49664 130.776 4.66514 130.634 4.80704C130.492 4.9312 130.324 4.99328 130.129 4.99328H126.298Z"
          fill="white" />
        <path
          d="M140.577 20.8238C139.016 20.8238 137.695 20.5932 136.613 20.132C135.549 19.6709 134.733 18.9969 134.165 18.11C133.598 17.2054 133.278 16.1234 133.207 14.8641C133.19 14.4916 133.181 14.0836 133.181 13.6402C133.181 13.1968 133.19 12.7888 133.207 12.4163C133.278 11.1392 133.615 10.0573 134.218 9.17041C134.822 8.28355 135.655 7.60953 136.719 7.14836C137.801 6.68719 139.087 6.45661 140.577 6.45661C142.067 6.45661 143.344 6.68719 144.409 7.14836C145.49 7.60953 146.333 8.28355 146.936 9.17041C147.539 10.0573 147.876 11.1392 147.947 12.4163C147.983 12.7888 148 13.1968 148 13.6402C148 14.0836 147.983 14.4916 147.947 14.8641C147.876 16.1234 147.557 17.2054 146.989 18.11C146.422 18.9969 145.597 19.6709 144.515 20.132C143.451 20.5932 142.138 20.8238 140.577 20.8238ZM140.577 17.0724C141.234 17.0724 141.686 16.8773 141.934 16.487C142.182 16.0968 142.324 15.5115 142.36 14.731C142.378 14.465 142.386 14.1014 142.386 13.6402C142.386 13.179 142.378 12.8154 142.36 12.5494C142.324 11.7867 142.182 11.2102 141.934 10.82C141.686 10.412 141.234 10.208 140.577 10.208C139.939 10.208 139.495 10.412 139.247 10.82C138.999 11.2102 138.848 11.7867 138.795 12.5494C138.777 12.8154 138.768 13.179 138.768 13.6402C138.768 14.1014 138.777 14.465 138.795 14.731C138.848 15.5115 138.999 16.0968 139.247 16.487C139.495 16.8773 139.939 17.0724 140.577 17.0724Z"
          fill="white" />
        <g filter="url(#filter0_i_189_16379)">
          <g clip-path="url(#clip0_189_16379)">
            <path
              d="M8.82748 5.4053C5.85104 4.26897 2.51566 5.75618 1.37731 8.72657L0 12.3191V20.4801C0.86107 20.4801 1.67677 20.2905 2.40979 19.9538C4.39307 19.0423 5.76937 17.0439 5.76937 14.7228V7.62553C5.76937 6.34401 6.81092 5.30447 8.09547 5.30447C8.34855 5.30447 8.59255 5.34581 8.82143 5.42143L8.82748 5.4053Z"
              fill="url(#paint0_linear_189_16379)" />
            <path
              d="M8.37698 5.24602C8.22675 5.20266 8.07652 5.16536 7.92628 5.1341C7.76798 5.10184 7.61069 5.07562 7.45239 5.05646C7.43122 5.05445 7.40903 5.05142 7.38786 5.0484C7.16402 5.0242 6.94119 5.01311 6.71937 5.01513C5.83209 5.02218 4.96396 5.23493 4.18355 5.62413C3.89115 5.76932 3.60984 5.94072 3.34567 6.13532C3.16922 6.26438 2.99983 6.40453 2.8375 6.55376C2.75684 6.62837 2.67819 6.70601 2.60055 6.78566C2.40596 6.98732 2.22447 7.20611 2.05911 7.43802C1.94921 7.59329 1.84636 7.75462 1.75057 7.92199C1.6074 8.17305 1.48136 8.43823 1.37449 8.71752L0.392423 11.2796L0.00927734 12.2767L0.0274264 12.2515L1.80099 9.78529C2.777 8.42815 4.23598 7.62253 5.77562 7.43096C5.80385 7.07504 5.91275 6.74331 6.08315 6.45091C6.18801 6.27245 6.31304 6.1081 6.46024 5.96392C6.61754 5.80864 6.79701 5.67656 6.99262 5.57069H6.99362C7.05815 5.53641 7.12571 5.50414 7.19326 5.47591C7.20133 5.47288 7.2094 5.47087 7.21746 5.46683C7.27897 5.44163 7.34148 5.41844 7.405 5.39928C7.42214 5.39424 7.44029 5.3902 7.45743 5.38617C7.51289 5.37105 7.56834 5.35491 7.62581 5.34382C7.66211 5.33677 7.70043 5.33273 7.73673 5.32668C7.77605 5.32063 7.81537 5.31358 7.85469 5.30853C7.93233 5.30047 8.01199 5.29643 8.09164 5.29643C8.15516 5.29643 8.21768 5.29845 8.28019 5.3045C8.46571 5.31963 8.64619 5.35794 8.8176 5.41339L8.82365 5.39726C8.67543 5.3408 8.52621 5.29139 8.37597 5.24703H8.37698V5.24602Z"
              fill="url(#paint1_linear_189_16379)" />
            <path
              d="M8.06995 -0.0178223C3.61334 -0.0178223 0 3.61584 0 8.09841V12.3591L1.37297 8.74876C2.50773 5.76443 5.8326 4.27126 8.79966 5.41191L8.79362 5.42811C9.71932 5.73404 10.3887 6.60928 10.3887 7.64255V14.7731C10.3887 17.9682 12.9638 20.5574 16.1409 20.5574V8.09841C16.1409 3.61584 12.5276 -0.0178223 8.07096 -0.0178223H8.06995Z"
              fill="url(#paint2_linear_189_16379)" />
            <path
              d="M15.7009 5.30153C15.6102 5.05349 15.5073 4.81251 15.3944 4.57658C15.224 4.22368 15.0284 3.8849 14.8106 3.56225C14.4466 3.02484 14.0201 2.5338 13.5402 2.09924C13.3486 1.92581 13.148 1.76045 12.9402 1.60518C12.7325 1.4499 12.5168 1.30471 12.2939 1.1696C11.0709 0.428518 9.63309 0 8.09648 0C3.62476 0 0 3.6177 0 8.07934V12.2193C0.00302484 12.2445 0.00705795 12.2687 0.0100828 12.2939L0.0231904 12.2576C0.348864 8.4403 0.819731 4.39408 6.47617 2.95829C10.9307 2.57212 14.856 5.86112 15.2432 10.3066L16.1304 20.4802C16.1496 20.4802 16.1688 20.4802 16.1879 20.4802H16.193V8.07833C16.193 7.38161 16.1042 6.70505 15.9379 6.05975C15.8713 5.80164 15.7917 5.54856 15.7009 5.30153Z"
              fill="url(#paint3_linear_189_16379)" />
          </g>
        </g>
        <rect x="125.58" y="0.691895" width="5.32118" height="4.43432" rx="2.21716"
          fill="url(#paint4_linear_189_16379)" />
        <rect x="125.58" y="0.691895" width="5.32118" height="4.43432" rx="1" fill="url(#paint5_linear_189_16379)" />
        <defs>
          <filter id="filter0_i_189_16379" x="0" y="0" width="16.1929" height="24.4812" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_189_16379" />
          </filter>
          <linearGradient id="paint0_linear_189_16379" x1="0" y1="12.7516" x2="8.82748" y2="12.7516"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#6E74E7" />
            <stop offset="1" stop-color="#000E15" />
          </linearGradient>
          <linearGradient id="paint1_linear_189_16379" x1="0.00927734" y1="8.64594" x2="8.82365" y2="8.64594"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#686EDA" />
            <stop offset="0.905" stop-color="#011D26" />
          </linearGradient>
          <linearGradient id="paint2_linear_189_16379" x1="0" y1="10.2703" x2="16.1409" y2="10.2703"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#7177EC" />
            <stop offset="1" stop-color="#001D25" />
          </linearGradient>
          <linearGradient id="paint3_linear_189_16379" x1="8.33746" y1="18.0976" x2="7.67905" y2="-3.79819"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#011C25" />
            <stop offset="0.64" stop-color="#6A70DF" />
            <stop offset="1" stop-color="#15F3AF" />
          </linearGradient>
          <linearGradient id="paint4_linear_189_16379" x1="128.241" y1="0.691895" x2="128.241" y2="5.12621"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#33879B" />
            <stop offset="1" stop-color="#588BD5" />
          </linearGradient>
          <linearGradient id="paint5_linear_189_16379" x1="128.241" y1="0.691895" x2="128.241" y2="5.12621"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#33879B" />
            <stop offset="0.55" stop-color="#588BD5" />
            <stop offset="0.99" stop-color="#42529A" />
          </linearGradient>
          <clipPath id="clip0_189_16379">
            <rect width="16.193" height="20.4812" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div class="loading-text">Loading...</div>
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
    </div>
  </div>
            `;

  // Add mouse interaction
  document.addEventListener('mousemove', handleOrbitalMouseMove);
}

function handleOrbitalMouseMove(e) {
  const rings = document.querySelectorAll('.orbital-ring');
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  rings.forEach((ring, index) => {
    const speed = (index + 1) * 0.15;
    ring.style.transform = `translate(${mouseX * speed * 30}px, ${mouseY * speed * 30}px)`;
  });
}

// Animation 2: Quantum Network
function createQuantumNetwork(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'quantum-canvas';
  canvas.width = 400;
  canvas.height = 400;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const particles = [];
  const particleCount = 50;

  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 2,
      hue: Math.random() * 60 + 200,
      life: Math.random() * 100 + 100
    });
  }

  function animateQuantum() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;

      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

      // Draw connections
      particles.forEach((otherParticle, otherIndex) => {
        if (index !== otherIndex) {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 100%, 70%, ${0.4 * (1 - distance / 100)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      // Draw particle
      const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2);
      gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 0.8)`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 70%, 0)`);

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, 0.9)`;
      ctx.fill();

      // Regenerate particle
      if (particle.life <= 0) {
        particle.x = Math.random() * canvas.width;
        particle.y = Math.random() * canvas.height;
        particle.vx = (Math.random() - 0.5) * 2;
        particle.vy = (Math.random() - 0.5) * 2;
        particle.life = Math.random() * 100 + 100;
        particle.hue = Math.random() * 60 + 200;
      }
    });

    requestAnimationFrame(animateQuantum);
  }

  animateQuantum();
}

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('quantum-container');
  createQuantumNetwork(container);
});

// Animation 3: Neural Wave
function createNeuralWave(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'neural-canvas';
  canvas.width = 400;
  canvas.height = 300;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let time = 0;

  const waves = [
    { amplitude: 20, frequency: 0.02, speed: 0.05, color: '#4facfe', offset: 0 },
    { amplitude: 25, frequency: 0.015, speed: 0.03, color: '#00f2fe', offset: Math.PI / 4 },
    { amplitude: 15, frequency: 0.025, speed: 0.07, color: '#7b68ee', offset: Math.PI / 2 },
    { amplitude: 22, frequency: 0.018, speed: 0.04, color: '#9370db', offset: Math.PI * 3 / 4 },
    { amplitude: 18, frequency: 0.022, speed: 0.06, color: '#4facfe', offset: Math.PI }
  ];

  function animateNeural() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.forEach((wave, waveIndex) => {
      ctx.beginPath();

      const points = [];
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = canvas.height / 2 +
          Math.sin((x * wave.frequency) + (time * wave.speed) + wave.offset) * wave.amplitude +
          Math.sin((x * wave.frequency * 2) + (time * wave.speed * 1.5) + wave.offset) * wave.amplitude * 0.3;
        points.push({ x, y });

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      // Gradient stroke
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, wave.color + '00');
      gradient.addColorStop(0.2, wave.color);
      gradient.addColorStop(0.8, wave.color);
      gradient.addColorStop(1, wave.color + '00');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.shadowColor = wave.color;
      ctx.shadowBlur = 15;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Add particles
      for (let i = 0; i < points.length; i += 25) {
        const point = points[i];
        if (point && Math.random() > 0.8) {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = wave.color;
          ctx.fill();
        }
      }
    });

    time += 0.5;
    requestAnimationFrame(animateNeural);
  }

  animateNeural();
}

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('neural-wave');
  createNeuralWave(container);
});

// Animation 4: DNA Helix
function createDNAHelix(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'dna-canvas';
  canvas.width = 300;
  canvas.height = 400;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  let time = 0;

  function animateDNA() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const helixHeight = canvas.height - 40;
    const helixWidth = 80;

    // Draw DNA strands
    for (let strand = 0; strand < 2; strand++) {
      ctx.beginPath();

      for (let y = 20; y < helixHeight; y += 3) {
        const angle = (y * 0.08) + (time * 0.03) + (strand * Math.PI);
        const x = centerX + Math.sin(angle) * helixWidth / 2;

        if (y === 20) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      const strandColor = strand === 0 ? '#4facfe' : '#00f2fe';
      ctx.strokeStyle = strandColor;
      ctx.lineWidth = 4;
      ctx.shadowColor = strandColor;
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }

    // Draw base pairs
    for (let y = 30; y < helixHeight - 20; y += 20) {
      const angle1 = (y * 0.08) + (time * 0.03);
      const angle2 = angle1 + Math.PI;

      const x1 = centerX + Math.sin(angle1) * helixWidth / 2;
      const x2 = centerX + Math.sin(angle2) * helixWidth / 2;

      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.strokeStyle = '#7b68ee';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Base pair nodes
      ctx.beginPath();
      ctx.arc(x1, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#4facfe';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x2, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#00f2fe';
      ctx.fill();
    }

    time++;
    requestAnimationFrame(animateDNA);
  }

  animateDNA();
}

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('dna-helix');
  createDNAHelix(container);
});

// Animation 5: Hypnotic Spiral
function createHypnoticSpiral(container) {
  container.innerHTML = `
                <div class="hypnotic-spiral">
                    <div class="spiral-element spiral-1"></div>
                    <div class="spiral-element spiral-2"></div>
                    <div class="spiral-element spiral-3"></div>
                    <div class="spiral-element spiral-4"></div>
                </div>
            `;
}

// Animation 6: Morphing Geometry
function createMorphingGeometry(container) {
  container.innerHTML = `
                <div class="morphing-geometry">
                    <div class="morph-shape"></div>
                </div>
            `;
}

// Initialize
window.addEventListener('load', () => {
  createBackgroundParticles();
});

// Clean up event listeners when hiding animation
function hideAnimation() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.classList.remove('active');
  clearInterval(loadingInterval);
  document.removeEventListener('mousemove', handleOrbitalMouseMove);
}



// Animation 1

const loadingText = document.querySelector('.loading-text');

function updateLoadingText() {
  loadingText.textContent = loadingMessages[messageIndex];
  messageIndex = (messageIndex + 1) % loadingMessages.length;
}

setInterval(updateLoadingText, 2000);

document.addEventListener('mousemove', (e) => {
  const rings = document.querySelectorAll('.ring');
  const mouseX = e.clientX / window.innerWidth - 0.5;
  const mouseY = e.clientY / window.innerHeight - 0.5;

  rings.forEach((ring, index) => {
    const speed = (index + 1) * 0.1;
    ring.style.transform = `translate(${mouseX * speed * 20}px, ${mouseY * speed * 20}px)`;
  });
});