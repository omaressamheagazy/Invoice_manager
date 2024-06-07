import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Dashboard from "@/views/Dashboard.vue";
import NotFound from "@/views/NotFound.vue";
import SigninView from '@/views/Authentication/SigninView.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import EmailVerificationView from '@/views/Pages/EmailVerificationView.vue'
import CreateInvoiceView from '@/views/Invoice/CreateInvoiceView.vue'
import InvoiceListView from '@/views/Invoice/InvoiceListView.vue'
import UpdateInvoiceView from '@/views/Invoice/UpdateInvoiceView.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import FormElementsView from '@/views/Forms/FormElementsView.vue'
import FormLayoutView from '@/views/Forms/FormLayoutView.vue'
import DataTablesView from '@/views/Pages/DataTablesView.vue'
import ErrorPageView from '@/views/Pages/ErrorPageView.vue'
import FileManagerView from '@/views/Pages/FileManagerView.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TablesView from '@/views/Tables/TablesView.vue'
import AlertsView from '@/views/UiElements/AlertsView.vue'
import BadgeView from '@/views/UiElements/BadgeView.vue'
import BreadcrumbView from '@/views/UiElements/BreadcrumbView.vue'
import ButtonsGroupView from '@/views/UiElements/ButtonsGroupView.vue'
import ButtonsView from '@/views/UiElements/ButtonsView.vue'
import CardsView from '@/views/UiElements/CardsView.vue'
import CarouselView from '@/views/UiElements/CarouselView.vue'
import DropdownsView from '@/views/UiElements/DropdownsView.vue'
import ImagesView from '@/views/UiElements/ImagesView.vue'
import ModalsView from '@/views/UiElements/ModalsView.vue'
import NotificationsView from '@/views/UiElements/NotificationsView.vue'
import PaginationView from '@/views/UiElements/PaginationView.vue'
import PopoversView from '@/views/UiElements/PopoversView.vue'
import ProgressView from '@/views/UiElements/ProgressView.vue'
import TabsView from '@/views/UiElements/TabsView.vue'
import TooltipsView from '@/views/UiElements/TooltipsView.vue'
import ComingSoonView from '@/views/Authentication/ComingSoonView.vue'
import UnderMaintenanceView from '@/views/Authentication/UnderMaintenanceView.vue'
import SpinnersView from '@/views/UiElements/SpinnersView.vue'
import ListView from '@/views/UiElements/ListView.vue'
import AvatarsView from '@/views/UiElements/AvatarsView.vue'
import ProTablesView from '@/views/Tables/ProTablesView.vue'
import ProFormLayoutView from '@/views/Forms/ProFormLayoutView.vue'
import ProFormElementsView from '@/views/Forms/ProFormElementsView.vue'

export const routes = [

    {
        path: '/app',
        name: 'app',
        component: Dashboard,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: ProfileView,
            },
            {
                path: 'verfiy-email',
                name: 'verifyEmail',
                component: EmailVerificationView,
            }, 
            {
                path: 'invoices',
                name: 'invoices',
                component: InvoiceListView,
            },
            {
                path: 'invoices/:id',
                name: 'invoiceDetails',
                component: UpdateInvoiceView,
            },
            {
                path: 'create-invoice',
                name: 'createInvoice',
                component: CreateInvoiceView
            }
        ]
    },
    {
        path: '/login',
        name: "login",
        meta: {
            requireGuest: true,
        },
        component: SigninView,
    },
    {
        path: '/register',
        name: "register",
        meta: {
            requireGuest: true,
        },
        component: SignupView
    },
   
    // {
    //     path: '/dashboard/analytics',
    //     name: 'analytics',
    //     component: AnalyticsView,
    //     meta: {
    //         title: 'Analytics Dashboard',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/dashboard/marketing',
    //     name: 'marketing',
    //     component: MarketingView,
    //     meta: {
    //         title: 'Marketing Dashboard',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/dashboard/crm',
    //     name: 'crm',
    //     component: CRMView,
    //     meta: {
    //         title: 'CRM Dashboard',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/dashboard/stocks',
    //     name: 'stocks',
    //     component: StocksView,
    //     meta: {
    //         title: 'Stocks Dashboard',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/calendar',
    //     name: 'calendar',
    //     component: CalendarView,
    //     meta: {
    //         title: 'Calendar',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/task/task-list',
    //     name: 'taskList',
    //     component: TaskListView,
    //     meta: {
    //         title: 'Task List',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/task/task-kanban',
    //     name: 'taskKanban',
    //     component: TaskKanbanView,
    //     meta: {
    //         title: 'Task Kanban',
    //         requiresAuth: true,
    //     }
    // },

    // {
    //     path: '/communities/create-community',
    //     name: 'createCommunity',
    //     component: CreateCommunityView,
    //     meta: {
    //         title: 'Create Community',
    //         requiresAuth: true,
    //     }
    // },

    // {
    //     path: '/forms/form-elements',
    //     name: 'formElements',
    //     component: FormElementsView,
    //     meta: {
    //         title: 'Form Elements',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/forms/pro-form-elements',
    //     name: 'proFormElements',
    //     component: ProFormElementsView,
    //     meta: {
    //         title: 'Pro Form Elements',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/forms/form-layout',
    //     name: 'formLayout',
    //     component: FormLayoutView,
    //     meta: {
    //         title: 'Form Layout',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/forms/pro-form-layout',
    //     name: 'proFormLayout',
    //     component: ProFormLayoutView,
    //     meta: {
    //         title: 'Pro Form Layout',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/tables',
    //     name: 'tables',
    //     component: TablesView,
    //     meta: {
    //         title: 'Tables',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/tables/pro-tables',
    //     name: 'proTables',
    //     component: ProTablesView,
    //     meta: {
    //         title: 'Pro Tables',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/settings',
    //     name: 'settings',
    //     component: SettingsView,
    //     meta: {
    //         title: 'Settings',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/file-manager',
    //     name: 'fileManager',
    //     component: FileManagerView,
    //     meta: {
    //         title: 'File Manager',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/data-tables',
    //     name: 'dataTables',
    //     component: DataTablesView,
    //     meta: {
    //         title: 'Data Tables',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/pricing-tables',
    //     name: 'pricingTables',
    //     component: PricingTablesView,
    //     meta: {
    //         title: 'Pricing Tables',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/error-page',
    //     name: 'errorPage',
    //     component: ErrorPageView,
    //     meta: {
    //         title: 'Error Page',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/faq',
    //     name: 'faq',
    //     component: FaqView,
    //     meta: {
    //         title: "Faq's",
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/team',
    //     name: 'team',
    //     component: TeamView,
    //     meta: {
    //         title: 'Teams',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/terms-conditions',
    //     name: 'termsConditions',
    //     component: TermsConditionsView,
    //     meta: {
    //         title: 'Terms & Conditions',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/pages/mail-success',
    //     name: 'mailSuccess',
    //     component: MailSuccessView,
    //     meta: {
    //         title: 'Mail Success',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/messages',
    //     name: 'messages',
    //     component: MessagesView,
    //     meta: {
    //         title: 'Messages',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/inbox',
    //     name: 'inbox',
    //     component: InboxView,
    //     meta: {
    //         title: 'Inbox',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/invoice',
    //     name: 'invoice',
    //     component: InvoiceView,
    //     meta: {
    //         title: 'Invoice',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/charts/basic-chart',
    //     name: 'basicChart',
    //     component: BasicChartView,
    //     meta: {
    //         title: 'Basic Chart',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/charts/advanced-chart',
    //     name: 'advancedChart',
    //     component: AdvancedChartView,
    //     meta: {
    //         title: 'Advanced Chart',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/accordion',
    //     name: 'accordion',
    //     component: AccordionView,
    //     meta: {
    //         title: 'Accordion',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/alerts',
    //     name: 'alerts',
    //     component: AlertsView,
    //     meta: {
    //         title: 'Alerts',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/avatars',
    //     name: 'avatars',
    //     component: AvatarsView,
    //     meta: {
    //         title: 'Avatars',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/badge',
    //     name: 'badge',
    //     component: BadgeView,
    //     meta: {
    //         title: 'Badge',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/breadcrumb',
    //     name: 'breadcrumb',
    //     component: BreadcrumbView,
    //     meta: {
    //         title: 'Breadcrumb',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/buttons',
    //     name: 'buttons',
    //     component: ButtonsView,
    //     meta: {
    //         title: 'Buttons',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/buttons-group',
    //     name: 'buttonsGroup',
    //     component: ButtonsGroupView,
    //     meta: {
    //         title: 'Buttons Group',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/cards',
    //     name: 'cards',
    //     component: CardsView,
    //     meta: {
    //         title: 'Cards',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/carousel',
    //     name: 'carousel',
    //     component: CarouselView,
    //     meta: {
    //         title: 'Carousel',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/dropdowns',
    //     name: 'dropdowns',
    //     component: DropdownsView,
    //     meta: {
    //         title: 'Dropdowns',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/images',
    //     name: 'images',
    //     component: ImagesView,
    //     meta: {
    //         title: 'Images',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/list',
    //     name: 'list',
    //     component: ListView,
    //     meta: {
    //         title: 'List',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/modals',
    //     name: 'modals',
    //     component: ModalsView,
    //     meta: {
    //         title: 'Modals',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/notifications',
    //     name: 'notifications',
    //     component: NotificationsView,
    //     meta: {
    //         title: 'Notifications',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/pagination',
    //     name: 'pagination',
    //     component: PaginationView,
    //     meta: {
    //         title: 'Pagination',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/popovers',
    //     name: 'popovers',
    //     component: PopoversView,
    //     meta: {
    //         title: 'Popovers',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/progress',
    //     name: 'progress',
    //     component: ProgressView,
    //     meta: {
    //         title: 'Progress',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/spinners',
    //     name: 'spinners',
    //     component: SpinnersView,
    //     meta: {
    //         title: 'Spinners',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/tabs',
    //     name: 'tabs',
    //     component: TabsView,
    //     meta: {
    //         title: 'Tabs',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/tooltips',
    //     name: 'tooltips',
    //     component: TooltipsView,
    //     meta: {
    //         title: 'Tooltips',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/ui-elements/videos',
    //     name: 'videos',
    //     component: VideosView,
    //     meta: {
    //         title: 'Videos',
    //         requiresAuth: true,
    //     }
    // },
    // {
    //     path: '/auth/signin',
    //     name: 'signin',
    //     component: SigninView,
    //     meta: {
    //         title: 'Signin',
    //     }
    // },
    // {
    //     path: '/auth/signup',
    //     name: 'signup',
    //     component: SignupView,
    //     meta: {
    //         title: 'Signup',
    //     }
    // },
    // {
    //     path: '/auth/reset-password',
    //     name: 'resetPassword',
    //     component: ResetPasswordView,
    //     meta: {
    //         title: 'Reset Password',
    //     }
    // },
    // {
    //     path: '/auth/coming-soon',
    //     name: 'comingSoon',
    //     component: ComingSoonView,
    //     meta: {
    //         title: 'Coming Soon',
    //     }
    // },
    // {
    //     path: '/auth/two-step-verification',
    //     name: 'twoStepVerification',
    //     component: TwoStepVerificationView,
    //     meta: {
    //         title: 'Two Step Verification',
    //     }
    // },
    {
        path: '/auth/under-maintenance',
        name: 'underMaintenance',
        component: UnderMaintenanceView,
        meta: {
            title: 'Under Maintenance',
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
]