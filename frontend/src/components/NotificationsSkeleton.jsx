import React from 'react';

const NotificationSkeletonItem = () => (
  <div className="animate-pulse p-4 border-b border-gray-100">
    <div className="flex space-x-3">
      <div className="h-10 w-10 rounded-full bg-gray-200" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  </div>
);

const NotificationsSkeleton = ({ count = 5 }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="h-6 w-48 bg-gray-200 rounded" />
      </div>
      <div className="divide-y divide-gray-100">
        {[...Array(count)].map((_, i) => (
          <NotificationSkeletonItem key={i} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsSkeleton;
