import React from 'react';
import BusinessPlan from './businessplan/BusinessPlan';
import Navbar from './Navbar';


const Services = () => {
    return (
        <>
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap">

                    {/* Service Box 1 */}
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                            <div className="mx-auto mb-7 inline-block">
                                <svg width="53" height="61" viewBox="0 0 53 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="20.8433" y="19.3018" width="10.1675" height="12.201" fill="#ABA8F7"></rect>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M42.1119 5.91343C40.9499 4.62242 39.4875 3.95192 38.2383 4.04801C36.1465 4.20891 33.9414 5.92602 31.8695 8.63549C30.0459 11.0202 28.5417 13.8917 27.5307 16.2458C33.6951 16.5488 37.7115 15.7786 40.1926 14.5916C42.7088 13.3878 43.5948 11.7969 43.7449 10.3715C43.9049 8.85254 43.2637 7.19309 42.1119 5.91343ZM8.75274 16.6855C6.24093 15.1295 4.93328 12.9984 4.69026 10.691C4.42078 8.13252 5.49249 5.64717 7.08955 3.87282C8.6764 2.10982 10.9989 0.817106 13.4643 1.00675C16.9349 1.27372 19.8489 3.94064 22.0221 6.78264C23.4868 8.69803 24.7428 10.8606 25.7343 12.8643C26.7259 10.8606 27.9818 8.69803 29.4465 6.78264C31.6197 3.94064 34.5337 1.27372 38.0043 1.00675C40.4697 0.817106 42.7922 2.10982 44.3791 3.87282C45.9761 5.64717 47.0478 8.13252 46.7784 10.691C46.5353 12.9984 45.2277 15.1295 42.7159 16.6855H49.8822C51.286 16.6855 52.4241 17.8236 52.4241 19.2274V31.1348C52.4241 32.5386 51.286 33.6766 49.8822 33.6766H49.3122V58.6608C49.3122 59.9464 48.1845 60.9886 46.7933 60.9886H31.5363L31.5191 60.9887L31.502 60.9886H20.3521L20.3349 60.9887L20.3178 60.9886H5.0608C3.66963 60.9886 2.54187 59.9464 2.54187 58.6608L2.54187 33.6766C1.13804 33.6766 0 32.5386 0 31.1348V19.2274C0 17.8236 1.13803 16.6855 2.54187 16.6855H8.75274ZM33.0443 58.1952H46.2895V33.6766H33.0443V58.1952ZM33.0443 30.6264H49.3738V19.7358H33.0443V30.6264ZM29.994 19.7358V30.6264H21.8601V19.7358H29.994ZM29.994 33.6766V58.1952H21.8601V33.6766H29.994ZM18.8098 58.1952V33.6766H5.56459V58.1952H18.8098ZM18.8098 30.6264V19.7358H3.05024V30.6264H18.8098ZM13.2303 4.04801C11.9811 3.95192 10.5187 4.62242 9.35668 5.91343C8.20488 7.19309 7.56373 8.85254 7.72372 10.3715C7.87385 11.7969 8.7598 13.3878 11.276 14.5916C13.7571 15.7786 17.7735 16.5488 23.9379 16.2458C22.9269 13.8917 21.4227 11.0202 19.5991 8.63549C17.5272 5.92602 15.3221 4.20891 13.2303 4.04801Z"
                                        fill="#6A64F1"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Free to Get Started</h3>
                                <p className="text-base font-medium text-body-color">FormBold is free to use, we are offering a decent free plan for experiments, personal projects and projects.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Box 2 */}
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                            <div className="mx-auto mb-7 inline-block">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M11.4049 2.9752H37.19C38.0116 2.9752 38.6776 2.30918 38.6776 1.4876C38.6776 0.666021 38.0116 0 37.19 0H10.9091C9.53977 0 8.42974 1.11003 8.42974 2.47933V17.5764L1.04954 22.7859C0.391399 23.2505 0 24.0059 0 24.8115V57.5207C0 58.89 1.11004 60 2.47933 60H57.5205C58.8898 60 59.9999 58.89 59.9999 57.5207V26.4868C59.9999 24.3552 57.488 23.2172 55.8856 24.6229L52.066 27.8242V22.8021C52.066 21.9805 51.4 21.3145 50.5784 21.3145C49.7568 21.3145 49.0908 21.9805 49.0908 22.8021V30.2401C49.0908 30.2656 49.0915 30.291 49.0927 30.3162L30.2843 46.0802L11.4049 29.0236V18.365C11.4051 18.3523 11.4051 18.3396 11.4049 18.3269V2.9752ZM8.42974 21.2181L5.24984 23.4628L5.25889 23.4798L11.4049 28.5575V21.2181H8.42974ZM8.42974 41.2275L12.0064 44.4475L30.2843 58.5444L48.5167 44.336L48.5977 44.2773C48.9363 44.0646 49.2977 43.9008 49.6726 43.7911L52.4322 42.9937V57.5207C52.4322 57.9564 52.0742 58.3144 51.6385 58.3144H8.36035C7.92471 58.3144 7.56665 57.9564 7.56665 57.5207V41.2275H8.42974ZM33.6507 49.5654L15.7339 37.7476L14.2296 36.6825L12.6357 35.5828L10.7914 34.3162V34.3127L32.7036 18.8115L45.4434 27.3378L42.8752 30.5194L41.1046 32.5194L37.7401 29.4917L35.063 31.7181L33.6507 33.0456L33.637 33.0622L20.9116 43.5087L19.0435 44.7997L19.0563 44.8153L26.0924 48.9582L27.9562 50.2096L28.9554 50.8875L33.6507 49.5654Z"
                                        fill="#6A64F1"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Reliable and Secure</h3>
                                <p className="text-base font-medium text-body-color">FormBold is reliable and secure, we are very strong and secure projects and other data online platforms.</p>
                            </div>
                        </div>
                    </div>

                    {/* Service Box 3 */}
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                        <div className="mb-9 rounded-xl py-8 px-7 shadow-md transition-all hover:shadow-lg sm:p-9 lg:px-6 xl:px-9">
                            <div className="mx-auto mb-7 inline-block">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M11.4049 2.9752H37.19C38.0116 2.9752 38.6776 2.30918 38.6776 1.4876C38.6776 0.666021 38.0116 0 37.19 0H10.9091C9.53977 0 8.42974 1.11003 8.42974 2.47933V17.5764L1.04954 22.7859C0.391399 23.2505 0 24.0059 0 24.8115V57.5207C0 58.89 1.11004 60 2.47933 60H57.5205C58.8898 60 59.9999 58.89 59.9999 57.5207V26.4868C59.9999 24.3552 57.488 23.2172 55.8856 24.6229L52.066 27.8242V22.8021C52.066 21.9805 51.4 21.3145 50.5784 21.3145C49.7568 21.3145 49.0908 21.9805 49.0908 22.8021V30.2401C49.0908 30.2656 49.0915 30.291 49.0927 30.3162L30.2843 46.0802L11.4049 29.0236V18.365C11.4051 18.3523 11.4051 18.3396 11.4049 18.3269V2.9752ZM8.42974 21.2181L5.24984 23.4628L5.25889 23.4798L11.4049 28.5575V21.2181H8.42974ZM8.42974 41.2275L12.0064 44.4475L30.2843 58.5444L48.5167 44.336L48.5977 44.2773C48.9363 44.0646 49.2977 43.9008 49.6726 43.7911L52.4322 42.9937V57.5207C52.4322 57.9564 52.0742 58.3144 51.6385 58.3144H8.36035C7.92471 58.3144 7.56665 57.9564 7.56665 57.5207V41.2275H8.42974ZM33.6507 49.5654L15.7339 37.7476L14.2296 36.6825L12.6357 35.5828L10.7914 34.3162V34.3127L32.7036 18.8115L45.4434 27.3378L42.8752 30.5194L41.1046 32.5194L37.7401 29.4917L35.063 31.7181L33.6507 33.0456L33.637 33.0622L20.9116 43.5087L19.0435 44.7997L19.0563 44.8153L26.0924 48.9582L27.9562 50.2096L28.9554 50.8875L33.6507 49.5654Z"
                                        fill="#6A64F1"></path>
                                </svg>
                            </div>
                            <div>
                                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">Innovative Solutions</h3>
                                <p className="text-base font-medium text-body-color">FormBold is all innovative with new features and features to increase each day.</p>
                            </div>
                        </div>
                    </div>

                </div>
               
                
            </div>
            <div>
                <BusinessPlan/>
            </div>
        </section>
        </>
         
    );
}

export default Services;
