'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

interface Message {
  id: string
  name: string
  email: string
  message: string
  createdAt: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // Get messages from localStorage
    try {
      const storedMessages = localStorage.getItem('contactMessages')
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages))
      }
    } catch (error) {
      console.error('Error loading messages from localStorage:', error)
      toast({
        title: 'Error',
        description: 'Failed to load messages',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }, [toast])

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      {loading ? (
        <div className="flex justify-center">
          <p>Loading messages...</p>
        </div>
      ) : messages.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-foreground/70">No messages yet</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {messages.map((message) => (
            <Card key={message.id} className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{message.name}</span>
                  <span className="text-sm font-normal text-foreground/70">
                    {new Date(message.createdAt).toLocaleString()}
                  </span>
                </CardTitle>
                <p className="text-sm text-foreground/70">{message.email}</p>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{message.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
