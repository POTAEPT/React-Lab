// ว่างไว้ตั้งใจ — เขียนเองใน Lab A (13:00–13:55)
function UserCard({ user }) {
    const hasFollowers = typeof user.followers === 'number'

    return (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <img src={user.avatar_url} alt={`${user.login} avatar`}
                className="h-16 w-16 rounded-full" />
            <h2 className="font-bold text-slate-900">{user.login}</h2>

            <p className="min-h-8 text-sm leading-5 text-slate-500">
                {user.bio || 'ไม่มีคำอธิบาย'}
            </p>

            {hasFollowers ? (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {user.followers.toLocaleString()} ผู้ติดตาม
                </span>
            ) : (
                <span className="rounded-full bg-slate-50 px-3 py-1 text-xs italic text-slate-400">
                    ยังไม่ทราบจำนวนผู้ติดตาม
                </span>
            )}

        </div>
    )
}

export default UserCard