import React from "react";

const colors = [
  "background",
  "foreground",
  "card",
  "card-foreground",
  "popover",
  "popover-foreground",
  "primary",
  "primary-foreground",
  "primary-hover",
  "secondary",
  "secondary-foreground",
  "secondary-hover",
  "muted",
  "muted-foreground",
  "accent",
  "accent-foreground",
  "destructive",
  "destructive-foreground",
  "destructive-hover",
  "border",
  "input",
  "ring",
];

const Colors = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-background w-10 h-10 border`}></div>
        <p className="w-24">background</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-foreground w-10 h-10 border`}></div>
        <p className="w-24">foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-card w-10 h-10 border`}></div>
        <p className="w-24">card</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-card-foreground w-10 h-10 border`}></div>
        <p className="w-24">card-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-popover w-10 h-10 border`}></div>
        <p className="w-24">popover</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-popover-foreground w-10 h-10 border`}></div>
        <p className="w-24">popover-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-primary-bg w-10 h-10 border`}></div>
        <p className="w-24">primary-bg</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-primary w-10 h-10 border`}></div>
        <p className="w-24">primary</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-primary-hover w-10 h-10 border`}></div>
        <p className="w-24">primary-hover</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-primary-foreground w-10 h-10 border`}></div>
        <p className="w-24">primary-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-secondary w-10 h-10 border`}></div>
        <p className="w-24">secondary</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-secondary-foreground w-10 h-10 border`}></div>
        <p className="w-24">secondary-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-muted w-10 h-10 border`}></div>
        <p className="w-24">muted</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-muted-foreground w-10 h-10 border`}></div>
        <p className="w-24">muted-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-accent w-10 h-10 border`}></div>
        <p className="w-24">accent</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-accent-foreground w-10 h-10 border`}></div>
        <p className="w-24">accent-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-destructive-bg w-10 h-10 border`}></div>
        <p className="w-24">destructive-bg</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-destructive w-10 h-10 border`}></div>
        <p className="w-24">destructive</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-destructive-hover w-10 h-10 border`}></div>
        <p className="w-24">destructive-hover</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-destructive-foreground w-10 h-10 border`}></div>
        <p className="w-24">destructive-foreground</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-border w-10 h-10 border`}></div>
        <p className="w-24">border</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-input w-10 h-10 border`}></div>
        <p className="w-24">input</p>
      </div>
      <div className="flex items-center gap-2 border p-2">
        <div className={`bg-ring w-10 h-10 border`}></div>
        <p className="w-24">ring</p>
      </div>
    </div>
  );
};

export default Colors;
