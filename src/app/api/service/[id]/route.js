import { NextResponse } from "next/server";
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

export const GET = async (req, { params }) => {
  const p = await params;
  const phoneCollection = dbConnect(collectionNamesObj.phoneCollection);
  const data = await phoneCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data)
};
