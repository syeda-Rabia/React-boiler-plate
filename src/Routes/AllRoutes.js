import { lazy } from 'react';
import fakeDelay from '../Shared/HelperMethods/FakeDelay'

const delayTime = 2000;

const routes = [

  // public Routes
  // { path: '/login', component: lazy(() => fakeDelay(delayTime)(import('../pages/Auth/Login'))), ispublic: true, exact: true },

  // // Admin
  // { path: '/admins', component: lazy(() => fakeDelay(delayTime)(import('../pages/Admin/userList.js'))), exact: true, role: [1] },
  // { path: '/admin/add-user', component: lazy(() => fakeDelay(delayTime)(import('../pages/Admin/addUser.js'))), exact: true, role: [1] },
  // { path: '/admin/admin-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Admin/userDetails.js'))), exact: true, role: [1] },
  // { path: '/admin/admin-user/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Admin/addUser.js'))), exact: true, role: [1] },
  // // Games
  // { path: '/games', component: lazy(() => fakeDelay(delayTime)(import('../pages/Games/gameList.js'))), exact: true, role: [1] },
  // { path: '/games/add-game', component: lazy(() => fakeDelay(delayTime)(import('../pages/Games/addGame.js'))), exact: true, role: [1] },
  // { path: '/games/game-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Games/gameDetails.js'))), exact: true, role: [1] },
  // { path: '/games/edit-game/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Games/addGame.js'))), exact: true, role: [1] },

  // // Survey
  // { path: '/surveys', component: lazy(() => fakeDelay(delayTime)(import('../pages/Surveys/surveyList.js'))), exact: true, role: [1, 5] },
  // { path: '/surveys/add-survey', component: lazy(() => fakeDelay(delayTime)(import('../pages/Surveys/addSurvey.js'))), exact: true, role: [1, 5] },
  // { path: '/surveys/survey-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Surveys/surveyDetails.js'))), exact: true, role: [1, 5] },
  // { path: '/surveys/edit-survey/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Surveys/addSurvey.js'))), exact: true, role: [1, 5] },


  // // Players
  // { path: '/players', component: lazy(() => fakeDelay(delayTime)(import('../pages/Players/playerList.js'))), exact: true, role: [1] },
  // { path: '/players/add-player', component: lazy(() => fakeDelay(delayTime)(import('../pages/Players/addPlayer.js'))), exact: true, role: [1] },
  // { path: '/players/player-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Players/playerDetails.js'))), exact: true, role: [1] },
  // { path: '/players/edit-player/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Players/addPlayer.js'))), exact: true, role: [1] },


  // // Ads
  // { path: '/advertisements', component: lazy(() => fakeDelay(delayTime)(import('../pages/Ads/adList.js'))), exact: true, role: [1, 4] },
  // { path: '/advertisements/add-advertisement', component: lazy(() => fakeDelay(delayTime)(import('../pages/Ads/addAd.js'))), exact: true, role: [1, 4] },
  // { path: '/advertisements/advertisement-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Ads/adDetails.js'))), exact: true, role: [1, 4] },
  // { path: '/advertisements/edit-advertisement/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Ads/addAd.js'))), exact: true, role: [1, 4] },

  // // Gift Cards
  // { path: '/giftcardrequests', component: lazy(() => fakeDelay(delayTime)(import('../pages/GiftCard/giftCardList.js'))), exact: true, role: [1, 4] },
  // { path: '/giftcardrequests/giftcards', component: lazy(() => fakeDelay(delayTime)(import('../pages/GiftCard/giftList.js'))), exact: true, role: [1, 4] },
  // { path: '/giftcardrequests/giftcards/add-giftcard', component: lazy(() => fakeDelay(delayTime)(import('../pages/GiftCard/addGift.js'))), exact: true, role: [1, 4] },
  // { path: '/giftcardrequests/giftcards/giftcard-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/GiftCard/giftDetails.js'))), exact: true, role: [1, 4] },
  // { path: '/giftcardrequests/giftcards/edit-giftcard/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/GiftCard/addGift.js'))), exact: true, role: [1, 4] },
  // //payments
  // { path: '/payments', component: lazy(() => fakeDelay(delayTime)(import('../pages/Payments/paymentList.js'))), exact: true, role: [1, 3] },
  // { path: '/payments/add-payment', component: lazy(() => fakeDelay(delayTime)(import('../pages/Payments/addPayment.js'))), exact: true, role: [1, 3] },
  // { path: '/payments/payment-details/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Payments/paymentDetails.js'))), exact: true, role: [1, 3] },
  // { path: '/payments/edit-payment/:id', component: lazy(() => fakeDelay(delayTime)(import('../pages/Payments/addPayment.js'))), exact: true, role: [1, 3] },



  // // Settings
  // { path: '/settings', component: lazy(() => fakeDelay(delayTime)(import('../pages/Setting/settings.js'))), exact: true, role: [1] },
  // { path: '/settings/update-setting', component: lazy(() => fakeDelay(delayTime)(import('../pages/Setting/updateSetting.js'))), exact: true, role: [1] },

  // // Dashboard
  { path: '/dashboard', component: lazy(() => fakeDelay(delayTime)(import('../AdminPages/DashBoard/index'))), exact: true, role: [1, 3, 4, 5] },
  // { path: '/profile', component: lazy(() => fakeDelay(delayTime)(import('../pages/Auth/Profile.js'))), exact: true, role: [1, 3, 4, 5] },
  // { path: '/forgot-password', component: lazy(() => fakeDelay(delayTime)(import('../pages/Auth/ForgotPassword.js'))), exact: true, ispublic: true },
  // { path: '/reset-password/:email/:token', component: lazy(() => fakeDelay(delayTime)(import('../pages/Auth/ResetPassword.js'))), exact: true, ispublic: true },
  // { path: '/reset-password-success', component: lazy(() => fakeDelay(delayTime)(import('../pages/Auth/PasswordResetSuccess.js'))), exact: true, ispublic: true },
  // // { path: '/loading', component: lazy(() => import('../helpers/LoadingScreen')), exact: true },
  { path: '/', component: lazy(() => fakeDelay(delayTime)(import('../AdminPages/Auth/Login'))), ispublic: true, exact: true },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }

];

export default routes;