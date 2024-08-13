
    export type RemoteKeys = 'betfinio_app/style' | 'betfinio_app/BetValue' | 'betfinio_app/DataTable' | 'betfinio_app/root' | 'betfinio_app/allowance' | 'betfinio_app/dialog' | 'betfinio_app/separator' | 'betfinio_app/sheet' | 'betfinio_app/popover' | 'betfinio_app/checkbox' | 'betfinio_app/input' | 'betfinio_app/button' | 'betfinio_app/command' | 'betfinio_app/select' | 'betfinio_app/tabs' | 'betfinio_app/scroll-area' | 'betfinio_app/dropdown-menu' | 'betfinio_app/badge' | 'betfinio_app/use-toast' | 'betfinio_app/table' | 'betfinio_app/drawer' | 'betfinio_app/tooltip' | 'betfinio_app/skeleton' | 'betfinio_app/breadcrumb' | 'betfinio_app/supabase' | 'betfinio_app/lib/api/conservative' | 'betfinio_app/lib/api/username' | 'betfinio_app/lib/api/dynamic' | 'betfinio_app/lib/api/token' | 'betfinio_app/lib/api/pass' | 'betfinio_app/helpers' | 'betfinio_app/lib/query/conservative' | 'betfinio_app/lib/query/dynamic' | 'betfinio_app/lib/query/username' | 'betfinio_app/lib/query/shared' | 'betfinio_app/lib/query/token' | 'betfinio_app/lib/query/pass' | 'betfinio_app/lib/utils' | 'betfinio_app/lib/types' | 'betfinio_app/lib' | 'betfinio_app/locales/ru' | 'betfinio_app/locales/en';
    type PackageType<T> = T extends 'betfinio_app/locales/en' ? typeof import('betfinio_app/locales/en') :T extends 'betfinio_app/locales/ru' ? typeof import('betfinio_app/locales/ru') :T extends 'betfinio_app/lib' ? typeof import('betfinio_app/lib') :T extends 'betfinio_app/lib/types' ? typeof import('betfinio_app/lib/types') :T extends 'betfinio_app/lib/utils' ? typeof import('betfinio_app/lib/utils') :T extends 'betfinio_app/lib/query/pass' ? typeof import('betfinio_app/lib/query/pass') :T extends 'betfinio_app/lib/query/token' ? typeof import('betfinio_app/lib/query/token') :T extends 'betfinio_app/lib/query/shared' ? typeof import('betfinio_app/lib/query/shared') :T extends 'betfinio_app/lib/query/username' ? typeof import('betfinio_app/lib/query/username') :T extends 'betfinio_app/lib/query/dynamic' ? typeof import('betfinio_app/lib/query/dynamic') :T extends 'betfinio_app/lib/query/conservative' ? typeof import('betfinio_app/lib/query/conservative') :T extends 'betfinio_app/helpers' ? typeof import('betfinio_app/helpers') :T extends 'betfinio_app/lib/api/pass' ? typeof import('betfinio_app/lib/api/pass') :T extends 'betfinio_app/lib/api/token' ? typeof import('betfinio_app/lib/api/token') :T extends 'betfinio_app/lib/api/dynamic' ? typeof import('betfinio_app/lib/api/dynamic') :T extends 'betfinio_app/lib/api/username' ? typeof import('betfinio_app/lib/api/username') :T extends 'betfinio_app/lib/api/conservative' ? typeof import('betfinio_app/lib/api/conservative') :T extends 'betfinio_app/supabase' ? typeof import('betfinio_app/supabase') :T extends 'betfinio_app/breadcrumb' ? typeof import('betfinio_app/breadcrumb') :T extends 'betfinio_app/skeleton' ? typeof import('betfinio_app/skeleton') :T extends 'betfinio_app/tooltip' ? typeof import('betfinio_app/tooltip') :T extends 'betfinio_app/drawer' ? typeof import('betfinio_app/drawer') :T extends 'betfinio_app/table' ? typeof import('betfinio_app/table') :T extends 'betfinio_app/use-toast' ? typeof import('betfinio_app/use-toast') :T extends 'betfinio_app/badge' ? typeof import('betfinio_app/badge') :T extends 'betfinio_app/dropdown-menu' ? typeof import('betfinio_app/dropdown-menu') :T extends 'betfinio_app/scroll-area' ? typeof import('betfinio_app/scroll-area') :T extends 'betfinio_app/tabs' ? typeof import('betfinio_app/tabs') :T extends 'betfinio_app/select' ? typeof import('betfinio_app/select') :T extends 'betfinio_app/command' ? typeof import('betfinio_app/command') :T extends 'betfinio_app/button' ? typeof import('betfinio_app/button') :T extends 'betfinio_app/input' ? typeof import('betfinio_app/input') :T extends 'betfinio_app/checkbox' ? typeof import('betfinio_app/checkbox') :T extends 'betfinio_app/popover' ? typeof import('betfinio_app/popover') :T extends 'betfinio_app/sheet' ? typeof import('betfinio_app/sheet') :T extends 'betfinio_app/separator' ? typeof import('betfinio_app/separator') :T extends 'betfinio_app/dialog' ? typeof import('betfinio_app/dialog') :T extends 'betfinio_app/allowance' ? typeof import('betfinio_app/allowance') :T extends 'betfinio_app/root' ? typeof import('betfinio_app/root') :T extends 'betfinio_app/DataTable' ? typeof import('betfinio_app/DataTable') :T extends 'betfinio_app/BetValue' ? typeof import('betfinio_app/BetValue') :T extends 'betfinio_app/style' ? typeof import('betfinio_app/style') :any;