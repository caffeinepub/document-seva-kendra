import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Clock,
  Inbox,
  Loader2,
  LogIn,
  LogOut,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useGetAllEnquiries } from "../hooks/useQueries";

function formatTimestamp(ns: bigint): string {
  const ms = Number(ns / 1_000_000n);
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(ms));
}

export default function AdminPanel() {
  const { identity, login, clear, isLoggingIn, isInitializing } =
    useInternetIdentity();
  const isAuthenticated = !!identity;
  const { data: enquiries, isLoading } = useGetAllEnquiries();

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div
          data-ocid="admin.loading_state"
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-muted-foreground text-sm">Initializing...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-ocid="admin.dialog"
          className="bg-card border border-border rounded-2xl shadow-card p-10 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-brand-orange" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Admin Access
          </h1>
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            This area is restricted to authorised administrators. Please log in
            with your Internet Identity to view enquiries.
          </p>
          <Button
            onClick={login}
            disabled={isLoggingIn}
            data-ocid="admin.primary_button"
            className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded-full h-auto"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4 mr-2" />
                Login with Internet Identity
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            Secure authentication via Internet Computer
          </p>
        </motion.div>
      </div>
    );
  }

  const principal = identity?.getPrincipal().toString();
  const shortPrincipal = principal
    ? `${principal.slice(0, 10)}...${principal.slice(-5)}`
    : "";

  return (
    <div className="min-h-screen bg-background">
      {/* Admin header */}
      <header className="bg-brand-dark border-b border-gray-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
            </div>
            <div>
              <span className="text-white font-bold text-sm">DSK Admin</span>
              <span className="hidden sm:inline text-gray-500 text-xs ml-2">
                Document Seva Kendra
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge
              variant="secondary"
              className="hidden sm:flex items-center gap-1.5 bg-gray-800 text-gray-400 border-gray-700"
            >
              <User className="w-3 h-3" />
              <span className="text-xs font-mono">{shortPrincipal}</span>
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={clear}
              data-ocid="admin.secondary_button"
              className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
            >
              <LogOut className="w-3.5 h-3.5 mr-1.5" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Page title */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Enquiries</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              All contact form submissions from the website.
            </p>
          </div>

          {/* Stats */}
          {!isLoading && enquiries && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Total Enquiries
                </p>
                <p className="text-3xl font-bold text-foreground">
                  {enquiries.length}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Latest Enquiry
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {enquiries.length > 0
                    ? formatTimestamp(
                        enquiries.reduce((a, b) =>
                          a.timestamp > b.timestamp ? a : b,
                        ).timestamp,
                      )
                    : "—"}
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Status
                </p>
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  Active
                </Badge>
              </div>
            </div>
          )}

          {/* Table */}
          {isLoading ? (
            <div
              data-ocid="admin.loading_state"
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4">
                    <Skeleton className="h-5 flex-1" />
                    <Skeleton className="h-5 flex-1" />
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-5 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          ) : enquiries && enquiries.length === 0 ? (
            <div
              data-ocid="admin.empty_state"
              className="bg-card border border-border rounded-xl p-16 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Inbox className="w-7 h-7 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                No enquiries yet
              </h3>
              <p className="text-muted-foreground text-sm max-w-xs">
                When visitors submit the contact form, their enquiries will
                appear here.
              </p>
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div
                data-ocid="admin.table"
                className="hidden md:block bg-card border border-border rounded-xl overflow-hidden"
              >
                <Table>
                  <TableHeader>
                    <TableRow className="border-border hover:bg-transparent">
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5" /> Name
                        </span>
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Mail className="w-3.5 h-3.5" /> Email
                        </span>
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5" /> Phone
                        </span>
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5" /> Message
                        </span>
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> Date
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enquiries?.map((enq, idx) => (
                      <TableRow
                        key={`${enq.email}-${String(enq.timestamp)}`}
                        data-ocid={`admin.row.item.${idx + 1}`}
                        className="border-border hover:bg-muted/40 transition-colors"
                      >
                        <TableCell className="font-medium text-foreground">
                          {enq.name}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          <a
                            href={`mailto:${enq.email}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {enq.email}
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          <a
                            href={`tel:${enq.phone}`}
                            className="hover:text-brand-orange transition-colors"
                          >
                            {enq.phone}
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground max-w-xs">
                          <p className="line-clamp-2 text-sm">{enq.message}</p>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          {formatTimestamp(enq.timestamp)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile cards */}
              <div className="md:hidden space-y-4">
                {enquiries?.map((enq, idx) => (
                  <motion.div
                    key={`${enq.email}-${String(enq.timestamp)}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    data-ocid={`admin.row.item.${idx + 1}`}
                    className="bg-card border border-border rounded-xl p-5 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-foreground">
                          {enq.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {formatTimestamp(enq.timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <a
                        href={`mailto:${enq.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-brand-orange transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{enq.email}</span>
                      </a>
                      <a
                        href={`tel:${enq.phone}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-brand-orange transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                        {enq.phone}
                      </a>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {enq.message}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </main>
    </div>
  );
}
