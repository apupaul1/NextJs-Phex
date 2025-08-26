import { NextResponse } from "next/server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async (req) => {
  const phoneCollection = await dbConnect(collectionNamesObj.phoneCollection);
  const data = await phoneCollection.find({}).toArray();
  return NextResponse.json(data);
};

export const POST = async (req) => {
  const body = await req.json();
  const phoneCollection = dbConnect(collectionNamesObj.phoneCollection);
  const result = await phoneCollection.insertOne(body);
  return NextResponse.json(result);
};
